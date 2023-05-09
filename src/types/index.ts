import type { Payload } from '../payload/index.js';

import type { SupportedDeps } from './rule.js';
import type { AllowedKeys } from './techs.js';
import type { Modify } from './utils.js';

export interface GraphEdge {
  to: Payload;
  read: boolean;
  write: boolean;
  vertices: Array<{ x: number; y: number }>;
  portSource: 'bottom' | 'left' | 'right' | 'top';
  portTarget: 'bottom' | 'left' | 'right' | 'top';
}

export interface Analyser {
  id: string;
  name: string;
  group: ComponentGroup;
  path: string[];
  tech: AllowedKeys | null;
  techs: AllowedKeys[];
  inComponent: string | null;
  childs: Analyser[];
  languages: Record<string, number>;
  edges: Array<Modify<GraphEdge, { to: string }>>;
  dependencies: Array<[SupportedDeps, string, string]>;
}

export type ComponentGroup = 'component' | 'hosting' | 'project' | 'thirdparty';
