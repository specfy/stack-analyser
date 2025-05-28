import path from 'node:path';

import { detectLang } from '../common/languages.js';
import { nid } from '../common/nid.js';
import { rulesComponents } from '../loader.js';
import { matchAllFiles } from '../matchAllFiles.js';
import { IGNORED_DIVE_PATHS } from '../provider/base.js';
import { listIndexed } from '../register.js';
import { findHosting, findImplicitComponent } from './helpers.js';
import { cleanPath } from '../tests/helpers.js';

import type { BaseProvider } from '../provider/base.js';
import type { Analyser, AnalyserJson, Dependency } from '../types/index.js';
import type { AllowedKeys } from '../types/techs.js';

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
  public parent?: null | Payload;
  public reason: Set<string>;

  constructor({
    id,
    name,
    folderPath,
    parent,
    tech,
    dependencies,
    reason,
  }: {
    id?: Analyser['id'];
    name: Analyser['name'];
    folderPath: Set<string> | string;
    parent?: null | Payload;
    tech?: Analyser['tech'];
    dependencies?: Analyser['dependencies'];
    reason?: string | string[];
  }) {
    this.id = id || nid();
    this.name = name;
    this.path = new Set(typeof folderPath === 'string' ? [folderPath] : folderPath);
    this.tech = tech || null;
    this.inComponent = null;
    this.childs = [];
    this.techs = new Set();
    this.languages = {};
    this.dependencies = dependencies || [];
    this.reason = Array.isArray(reason)
      ? new Set(reason)
      : new Set(typeof reason === 'string' ? [reason] : []);

    this.parent = parent;
    this.edges = [];
  }

  /**
   * Analyze a folder recursively.
   * It will modify the current Payload.
   */
  async recurse(provider: BaseProvider, filePath: string): Promise<void> {
    const files = await provider.listDir(filePath);

    // eslint-disable-next-line unicorn/no-this-assignment, @typescript-eslint/no-this-alias
    let ctx: Payload = this;
    for (const rule of rulesComponents) {
      const res = await rule(files, provider);
      if (res === false) {
        continue;
      }

      const resArray = Array.isArray(res) ? res : [res];
      for (const pl of resArray) {
        if (pl.name === 'virtual') {
          for (const child of pl.childs) {
            this.addChild(child);
          }
          this.combine(pl);
        } else {
          ctx = pl;
          this.addChild(pl);
        }
      }
    }

    // Detect Tech
    const matched = matchAllFiles(files, provider.basePath);
    ctx.addTechs(matched);

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
      // we only merge if a tech is similar otherwise it's too easy to get a false-positive
      if (!s.tech && !service.tech) {
        return false;
      }
      if (s.name === service.name) return true;
      if (s.tech === service.tech) return true;
      return false;
    });

    if (service.tech?.includes('.')) {
      const [host] = service.tech.split('.');
      const tech = listIndexed[host as AllowedKeys];
      if (tech.type === 'hosting' || tech.type === 'cloud') {
        const pl = new Payload({
          name: tech.name,
          folderPath: service.path,
          tech: tech.tech,
          reason: `implicit: ${service.tech}`,
        });
        const child = this.addChild(pl);
        service.inComponent = child;
      }
    }

    if (exist) {
      // Log all paths were it was found
      for (const p of service.path) {
        exist.path.add(p);
      }

      // Update edges to point to the initial component
      if (service.parent) {
        for (const edge of service.parent.edges) {
          if (edge.target.id !== service.id) {
            continue;
          }

          edge.target = exist;
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
  addTechs(tech: Map<AllowedKeys, string[]>): void {
    for (const [key, reason] of tech.entries()) {
      this.addTech(key, reason);
    }
  }

  /**
   * Declare this Payload has built with this tech.
   */
  addTech(tech: AllowedKeys, reason: string[]): void {
    this.techs.add(tech);
    for (const r of reason) {
      this.reason.add(r);
    }

    findImplicitComponent({ pl: this, tech, reason });
    findHosting(this, tech);
  }

  /**
   * Register a relationship between this Payload and an other one.
   */
  addEdges(pl: Payload): void {
    this.edges.push({
      target: pl,
      read: true,
      write: true,
    });
  }

  /**
   * Helper to add a lang entry to languages.
   */
  public addLang(name: string, count = 1): void {
    if (!this.languages[name]) {
      this.languages[name] = 0;
    }

    this.languages[name] += count;
  }

  /**
   * Register a parent of this Payload
   */
  setParent(pl: null | Payload): void {
    this.parent = pl;
  }

  /**
   * Detect language of a file at this level.
   */
  detectLang(filename: string): void {
    const lang = detectLang(filename);
    if (lang) {
      this.addLang(lang.group || lang.name);
    }
  }

  combineDependencies(pl: Payload): void {
    // Merge dependencies
    const dedup = new Map<string, Dependency>();
    for (const dep of this.dependencies) dedup.set(dep.join('_'), dep);
    for (const dep of pl.dependencies) dedup.set(dep.join('_'), dep);
    this.dependencies = [...dedup.values()];
  }

  /**
   * Merge this Payload and an other one.
   * There is no failsafe, it will merge whatever is passed even if they are not the same kind.
   * It's mostly used to flatten folders.
   */
  combine(pl: Payload): void {
    // Log all paths were it was found
    this.path = new Set([...this.path, ...pl.path]);

    // Merge dependencies
    this.combineDependencies(pl);

    for (const [lang, count] of Object.entries(pl.languages)) {
      this.addLang(lang, count);
    }

    for (const tech of pl.techs) this.techs.add(tech);
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
      folderPath: this.path,
      parent: this.parent,
      tech: this.tech,
      dependencies: this.dependencies,
    });
    cp.techs = new Set(this.techs);
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
  toJson(root = ''): AnalyserJson {
    return {
      id: this.id,
      name: this.name,
      path: cleanPath([...this.path], root),
      tech: this.tech,
      edges: this.edges.map((edge) => {
        return { ...edge, target: edge.target.id };
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
      reason: [...this.reason.values()],
    };
  }
}
