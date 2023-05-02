import type { AllowedKeys } from './techs';

export interface GraphEdge {
  to: string;
  read: boolean;
  write: boolean;
  vertices: Array<{ x: number; y: number }>;
  portSource: 'bottom' | 'left' | 'right' | 'top';
  portTarget: 'bottom' | 'left' | 'right' | 'top';
}

export interface TechAnalyser {
  id: string;
  name: string;
  group: ComponentGroup;
  path: string[];
  tech: AllowedKeys | null;
  techs: AllowedKeys[];
  inComponent: string | null;
  components: Array<Omit<TechAnalyser, 'components'>>;
  languages: Record<string, number>;
  edges: GraphEdge[];
}

export type ComponentGroup = 'component' | 'hosting' | 'project' | 'thirdparty';
