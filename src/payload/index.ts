import path from 'node:path';

import { languages, others } from '../common/languages.js';
import { nid } from '../common/nid.js';
import { listIndexed, nameToKey } from '../common/techs.js';
import type { BaseProvider } from '../provider/base.js';
import { IGNORED_DIVE_PATHS } from '../provider/base.js';
import { rulesComponents, rulesTechs } from '../rules.js';
import { cleanPath } from '../tests/helpers.js';
import type { Analyser, AnalyserJson } from '../types/index.js';
import type { AllowedKeys } from '../types/techs.js';

import '../rules/index.js';
import { findHosting, findImplicitComponent } from './helpers.js';

export class Payload implements Analyser {
  public id;
  public name;
  public path;
  public tech;
  public languages: Analyser['languages'];
  public childs: Analyser['childs'];
  public techs: Analyser['techs'];
  public inComponent: Analyser['inComponent'];
  public dependencies: Analyser['dependencies'];
  public edges: Analyser['edges'];
  public parent?: Payload | null;

  constructor({
    id,
    name,
    folderPath,
    parent,
    tech,
    dependencies,
  }: {
    id?: Analyser['id'];
    name: Analyser['name'];
    folderPath: string;
    parent?: Payload | null;
    tech?: Analyser['tech'];
    dependencies?: Analyser['dependencies'];
  }) {
    this.id = id || nid();
    this.name = name;
    this.path = [folderPath];
    this.tech = tech || null;
    this.inComponent = null;
    this.childs = [];
    this.techs = new Set();
    this.languages = {};
    this.dependencies = dependencies || [];

    this.parent = parent;
    this.edges = [];
  }

  /**
   * Analyze a folder recursively.
   * It will modify the current Payload.
   */
  async recurse(provider: BaseProvider, filePath: string) {
    const files = await provider.listDir(filePath);

    let ctx: Payload = this;
    for (const rule of rulesComponents) {
      const res = await rule(files, provider);
      if (!res) {
        continue;
      }

      const resArray = Array.isArray(res) ? res : [res];
      for (const pl of resArray) {
        if (pl.name !== 'virtual') {
          ctx = pl;
          this.addChild(pl);
        } else {
          pl.childs.forEach((child) => this.addChild(child));
        }
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

  /**
   * Register a child to this Payload.
   * If a similar child is found at the same level, it will merge them.
   */
  addChild(service: Payload): Payload {
    const exist = this.childs.find((s) => {
      if (s.name === service.name) return true;
      if (s.tech && service.tech && s.tech === service.tech) return true;
      return false;
    });

    if (service.tech?.includes('.')) {
      const [host] = service.tech.split('.');
      const tech = listIndexed[host as AllowedKeys];
      const pl = new Payload({
        name: tech.name,
        folderPath: service.path[0],
        tech: tech.key,
      });
      const child = this.addChild(pl);
      service.inComponent = child;
    }

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

      return exist;
    }

    service.setParent(this);
    this.childs.push(service);
    return service;
  }

  /**
   * Register a tech.
   */
  addTechs(tech: AllowedKeys[]) {
    tech.forEach((t) => this.addTech(t));
  }

  /**
   * Declare this Payload has built with this tech.
   */
  addTech(tech: AllowedKeys) {
    this.techs.add(tech);

    findImplicitComponent(this, tech);
    findHosting(this, tech);
  }

  /**
   * Register a relationship between this Payload and an other one.
   */
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

  /**
   * Helper to add a lang entry to languages.
   */
  public addLang(name: string, count: number = 1) {
    if (!this.languages[name]) {
      this.languages[name] = 0;
    }

    this.languages[name] += count;

    if (name in nameToKey) {
      this.addTech(nameToKey[name]);
    }
  }

  /**
   * Register a parent of this Payload
   */
  setParent(pl: Payload | null) {
    this.parent = pl;
  }

  /**
   * Detect language of a file at this level.
   */
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

  /**
   * Merge this Payload and an other one.
   * There is no failsafe, it will merge whatever is passed even if they are not the same kind.
   * It's mostly used to flatten folders.
   */
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

  /**
   * Create a copy of this Payload.
   * It's a deep copy, meaning the childs, parent and other stuff will still point to the original references.
   */
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

  /**
   *
   */
  /**
   * Output a deep copy in JSON, free of reference.
   *
   * @param root Absolute path to remove from output
   */
  toJson(root: string = ''): AnalyserJson {
    return {
      id: this.id,
      name: this.name,
      path: cleanPath(this.path, root),
      tech: this.tech,
      edges: this.edges.map((edge) => {
        return { ...edge, to: edge.to.id };
      }),
      inComponent: this.inComponent ? this.inComponent.id : null,
      childs: this.childs
        .map((service) => {
          return service.toJson(root);
        })
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        }),
      techs: [...this.techs].sort(),
      languages: this.languages,
      dependencies: this.dependencies,
    };
  }
}
