import path from 'node:path';

import { languages, others } from '../common/languages';
import { nid } from '../common/nid';
import { nameToKey } from '../common/techs';
import type { BaseProvider } from '../provider/base';
import { IGNORED_DIVE_PATHS } from '../provider/base';
import { rulesComponents, rulesTechs } from '../rules';
import type { ComponentGroup, GraphEdge, TechAnalyser } from '../types';
import type { AllowedKeys } from '../types/techs';

import '../rules/index';

export class Payload {
  public id: string;
  public languages: Record<string, number>;
  public components: Payload[];
  public path: string;
  public name: string;
  public group: ComponentGroup;
  public techs: Set<AllowedKeys>;
  public inComponent: string | null;
  public tech: AllowedKeys | null;

  private edges: GraphEdge[];

  constructor({
    name,
    folderPath,
    tech,
    group,
  }: {
    name: string;
    folderPath: string;
    tech?: AllowedKeys | null;
    group?: ComponentGroup;
  }) {
    this.id = nid();
    this.name = name;
    this.path = folderPath;
    this.tech = tech || null;
    this.edges = [];
    this.group = group || 'component';
    this.inComponent = null;

    this.components = [];
    this.techs = new Set();
    this.languages = {};
  }

  async recurse(provider: BaseProvider, filePath: string) {
    const files = await provider.listDir(filePath);

    let ctx: Payload = this;
    for (const rule of rulesComponents) {
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
    for (const rule of rulesTechs) {
      const res = rule(files);
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

  addComponent(service: Payload) {
    const exist = this.components.find(
      (s) =>
        s.name === service.name ||
        (s.tech && service.tech && s.tech === service.tech)
    );
    if (exist) {
      // TODO: merge
      return;
    }

    this.components.push(service);
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

  addEdges(id: string) {
    this.edges.push({
      to: id,
      portSource: 'right',
      portTarget: 'left',
      read: true,
      write: true,
      vertices: [],
    });
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
    pl.components.forEach((component) => this.addComponent(component));

    if (pl.name !== 'virtual') {
      this.addComponent(pl);
    }

    for (const [lang, count] of Object.entries(pl.languages)) {
      this.addLang(lang, count);
    }
  }

  toJson(): TechAnalyser {
    return {
      id: this.id,
      name: this.name,
      group: this.group,
      path: this.path,
      tech: this.tech,
      edges: this.edges,
      inComponent: this.inComponent,
      components: this.components.map((service) => {
        const { components, ...rest } = service.toJson();
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
