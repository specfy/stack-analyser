import path from 'node:path';

import { languages, others } from '../common/languages';
import { nid } from '../common/nid';
import { listIndexed, nameToKey } from '../common/techs';
import type { BaseProvider } from '../provider/base';
import { IGNORED_DIVE_PATHS } from '../provider/base';
import { rulesComponents, rulesTechs } from '../rules';
import type { ComponentGroup, GraphEdge, TechAnalyser } from '../types';
import type { AllowedKeys } from '../types/techs';

import '../rules/index';
import { findHosting, findImplicitComponent } from './helpers';

export class Payload {
  public id: string;
  public languages: Record<string, number>;
  public childs: Payload[];
  public path: string[];
  public name: string;
  public group: ComponentGroup;
  public techs: Set<AllowedKeys>;
  public inComponent: Payload | null;
  public tech: AllowedKeys | null;
  public dependencies: TechAnalyser['dependencies'];
  public edges: GraphEdge[];
  public parent?: Payload | null;

  constructor({
    id,
    name,
    folderPath,
    parent,
    tech,
    dependencies,
  }: {
    id?: string;
    name: string;
    folderPath: string;
    parent?: Payload | null;
    tech?: AllowedKeys | null;
    dependencies?: TechAnalyser['dependencies'];
  }) {
    this.id = id || nid();
    this.name = name;
    this.path = [folderPath];
    this.tech = tech || null;
    this.inComponent = null;
    this.childs = [];
    this.techs = new Set();
    this.languages = {};
    this.group = 'component';
    this.dependencies = dependencies || [];

    this.parent = parent;
    this.edges = [];

    if (this.tech) {
      const ref = listIndexed[this.tech];
      if (ref.type === 'hosting') {
        this.group = 'hosting';
      } else if (ref.type === 'sass') {
        this.group = 'thirdparty';
      }
    }
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
        this.addComponent(res);
      } else {
        res.childs.forEach((child) => this.addComponent(child));
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
  }

  addComponent(service: Payload) {
    const exist = this.childs.find((s) => {
      if (s.name === service.name) return true;
      if (s.tech && service.tech && s.tech === service.tech) return true;
      return false;
    });

    if (exist) {
      // Log all paths were it was found
      exist.path.push(...service.path);

      // Update edges to point to the initial component
      if (service.parent) {
        for (const edge of service.parent.edges) {
          if (edge.to.id !== service.id) {
            continue;
          }

          edge.to = exist;
        }
      }

      // Merge dependencies
      exist.dependencies = [...exist.dependencies, ...service.dependencies];

      return;
    }

    service.setParent(this);
    this.childs.push(service);
  }

  addTechs(tech: AllowedKeys[]) {
    tech.forEach((t) => this.addTech(t));
  }

  addTech(tech: AllowedKeys) {
    this.techs.add(tech);

    findImplicitComponent(this, tech);
    findHosting(this, tech);
  }

  addEdges(pl: Payload) {
    this.edges.push({
      to: pl,
      portSource: 'right',
      portTarget: 'left',
      read: true,
      write: true,
      vertices: [],
    });
  }

  setParent(pl: Payload | null) {
    this.parent = pl;
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

  combine(pl: Payload): void {
    // Log all paths were it was found
    this.path = [...new Set([...this.path, ...pl.path])];

    // Merge dependencies
    // TODO: dedup
    this.dependencies = [...this.dependencies, ...pl.dependencies];

    for (const [lang, count] of Object.entries(pl.languages)) {
      this.addLang(lang, count);
    }

    pl.techs.forEach((tech) => this.techs.add(tech));
    if (pl.tech) {
      this.techs.add(pl.tech);
    }
  }

  copy(): Payload {
    const cp = new Payload({
      id: this.id,
      name: this.name,
      folderPath: this.path[0],
      parent: this.parent,
      tech: this.tech,
      dependencies: this.dependencies,
    });
    cp.techs = new Set([...this.techs]);
    cp.inComponent = this.inComponent;
    cp.edges = this.edges;
    cp.path = this.path;
    cp.languages = this.languages;
    cp.childs = this.childs;

    return cp;
  }

  toJson(): TechAnalyser {
    return {
      id: this.id,
      name: this.name,
      group: this.group,
      path: this.path,
      tech: this.tech,
      edges: this.edges.map((edge) => {
        return { ...edge, to: edge.to.id };
      }),
      inComponent: this.inComponent ? this.inComponent.id : null,
      childs: this.childs
        .map((service) => {
          return service.toJson();
        })
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        }),
      techs: [...this.techs].sort(),
      languages: this.languages,
      dependencies: this.dependencies,
    };
  }

  public addLang(name: string, count: number = 1) {
    if (!this.languages[name]) {
      this.languages[name] = 0;
    }

    this.languages[name] += count;

    if (name in nameToKey) {
      this.addTech(nameToKey[name]);
    }
  }
}
