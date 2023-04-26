import type { AllowedKeys, TechItem } from './techs';

export interface GraphEdge {
  to: string;
  read: boolean;
  write: boolean;
  vertices: Array<{ x: number; y: number }>;
  portSource: 'bottom' | 'left' | 'right' | 'top';
  portTarget: 'bottom' | 'left' | 'right' | 'top';
}

export type RuleTechReturn = TechItem;

export interface TechAnalyser {
  name: string;
  path: string;
  tech: AllowedKeys | null;
  techs: AllowedKeys[];
  services: Array<Omit<TechAnalyser, 'services'>>;
  languages: Record<string, number>;
  edges: GraphEdge[];
}
