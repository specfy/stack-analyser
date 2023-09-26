import type { Payload } from '../payload/index.js';

import type { SupportedDeps } from './rule.js';
import type { AllowedKeys } from './techs.js';
import type { Modify } from './utils.js';

export interface GraphEdge {
  target: Payload;
  read: boolean;
  write: boolean;
}

export type Dependency = [SupportedDeps, string, string];

export interface Analyser {
  /**
   * Unique random id for this payload
   */
  id: string;

  /**
   * Best-effort name of this payload
   */
  name: string;

  /**
   * Where this payload was found.
   * When flatten() it will contain all path that were deduplicated
   */
  path: Set<string>;

  /**
   * If this payload is a specific Technology.
   * e.g: if it's a Postgresql database, the tech will be: "postgresql"
   */
  tech: AllowedKeys | null;

  /**
   * List matched tech from the rules.
   * Computed with the dependencies and languages.
   */
  techs: Set<AllowedKeys>;

  /**
   * If this payload is hosted by another payload.
   * e.g: we found a vercel dependency at the same level, this payload will be considered in the component Vercel.
   */
  inComponent: Payload | null;

  /**
   * List all childs of this payload
   */
  childs: Payload[];

  /**
   * List all languages found in this folder.
   * This list is computed using file extensions.
   */
  languages: Record<string, number>;

  /**
   * List all relationship from this Payload to another one.
   * e.g:
   * this is a package.json and we found a Postgresql at the same level,
   * we will add an edge from this payload to the Postgresql's one.
   */
  edges: GraphEdge[];

  /**
   * List all dependencies wether or not they matched a rule.
   */
  dependencies: Dependency[];
}

export type AnalyserJson = Modify<
  Analyser,
  {
    childs: AnalyserJson[];
    path: string[];
    techs: AllowedKeys[];
    inComponent: string | null;
    edges: Array<Modify<GraphEdge, { target: string }>>;
    reason: string[];
  }
>;
