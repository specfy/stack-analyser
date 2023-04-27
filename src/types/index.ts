import type { AllowedKeys, TechItem } from './techs';

export interface GraphEdge {
  to: string;
  read: boolean;
  write: boolean;
  vertices: Array<{ x: number; y: number }>;
  portSource: 'bottom' | 'left' | 'right' | 'top';
  portTarget: 'bottom' | 'left' | 'right' | 'top';
}

export interface TechAnalyser {
  name: string;
  path: string;
  tech: AllowedKeys | null;
  techs: AllowedKeys[];
  components: Array<Omit<TechAnalyser, 'components'>>;
  languages: Record<string, number>;
  edges: GraphEdge[];
}

export type ComponentType = 'component' | 'hosting' | 'project' | 'thirdparty';
