import path from 'node:path';

import { languages, others } from '../common/languages';
import { nameToKey } from '../common/techs';
import type { GraphEdge, TechAnalyser } from '../types';
import type { AllowedKeys } from '../types/techs';

export class Payload {
  public languages: Record<string, number>;

  private name: string;
  private path: string;
  private edges: GraphEdge[];
  private tech: AllowedKeys | null;
  private services: Payload[];
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
  }

  toJson(): TechAnalyser {
    return {
      name: this.name,
      path: this.path,
      tech: this.tech,
      services: this.services.map((service) => {
        return {
          name: service.name,
          path: service.path,
          tech: service.tech,
          edges: service.edges,
          techs: [...service.techs],
        };
      }),
      techs: [...this.techs],
      languages: this.languages,
    };
  }

  private addLang(name: string) {
    if (!this.languages[name]) {
      this.languages[name] = 0;
    }

    this.languages[name] += 1;

    if (name in nameToKey) {
      this.addTech(nameToKey[name]);
    }
  }
}
