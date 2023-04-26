import path from 'node:path';

import { languages, others } from '../common/languages';
import { nameToKey } from '../common/techs';
import type { BaseProvider } from '../provider/base';
import { IGNORED_DIVE_PATHS } from '../provider/base';
import { rules, rulesServices } from '../rules';
import type { GraphEdge, TechAnalyser } from '../types';
import type { AllowedKeys } from '../types/techs';

export class Payload {
  public languages: Record<string, number>;
  public services: Payload[];
  public path: string;
  public name: string;

  private edges: GraphEdge[];
  private tech: AllowedKeys | null;
  private techs: Set<AllowedKeys>;

  constructor(name: string, folderPath: string, tech?: AllowedKeys | null) {
    this.name = name;
    this.path = folderPath;
    this.tech = tech || null;
    this.edges = [];

    this.services = [];
    this.techs = new Set();
    this.languages = {};
  }

  async recurse(provider: BaseProvider, filePath: string) {
    const files = await provider.listDir(filePath);

    let ctx: Payload = this;
    for (const rule of rulesServices) {
      const res = await rule(files, provider);
      if (!res) {
        continue;
      }

      if (res.name !== 'virtual') {
        ctx = res;
      } else {
        ctx.merge(res);
      }
    }

    // Detect Tech
    for (const rule of rules) {
      const res = await rule(files);
      if (!res) {
        continue;
      }

      ctx.addTech(res.key);
    }

    // Recursively dive in folders
    for (const file of files) {
      if (file.type === 'file') {
        ctx.detectLang(file.name);
        continue;
      }
      if (IGNORED_DIVE_PATHS.includes(file.name)) {
        continue;
      }

      const fp = path.join(filePath, file.name);

      await ctx.recurse(provider, fp);
    }

    if (ctx !== this) {
      this.merge(ctx);
    }
  }

  addService(service: Payload) {
    const exist = this.services.find((s) => s.name === service.name);
    if (exist) {
      // TODO: merge
      return;
    }

    this.services.push(service);
    for (const tech of service.techs) {
      this.techs.add(tech);
    }

    if (service.tech) {
      this.techs.add(service.tech);
    }
  }

  addTech(tech: AllowedKeys | AllowedKeys[]) {
    if (Array.isArray(tech)) {
      tech.forEach((t) => this.techs.add(t));
      return;
    }

    this.techs.add(tech);
  }

  detectLang(filename: string) {
    const ext = path.extname(filename);

    for (const lang of languages) {
      if (!lang.extensions.includes(ext)) {
        continue;
      }

      this.addLang(lang.group || lang.name);
      return;
    }

    for (const lang of others) {
      if (!lang.extensions.includes(ext)) {
        continue;
      }

      this.addLang(lang.group || lang.name);
      return;
    }
  }

  merge(pl: Payload) {
    this.addTech([...pl.techs]);
    pl.services.forEach((service) => this.addService(service));

    if (pl.name !== 'virtual') {
      this.addService(pl);
    }

    for (const [lang, count] of Object.entries(pl.languages)) {
      this.addLang(lang, count);
    }
  }

  toJson(): TechAnalyser {
    return {
      name: this.name,
      path: this.path,
      tech: this.tech,
      edges: this.edges,
      services: this.services.map((service) => {
        const { services, ...rest } = service.toJson();
        return rest;
      }),
      techs: [...this.techs].sort(),
      languages: this.languages,
    };
  }

  private addLang(name: string, count: number = 1) {
    if (!this.languages[name]) {
      this.languages[name] = 0;
    }

    this.languages[name] += count;

    if (name in nameToKey) {
      this.addTech(nameToKey[name]);
    }
  }
}
