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

export type RuleServiceReturn = Service[];

export interface Service {
  name: string;
  path: string;
  tech: AllowedKeys | null;
  techs: Set<AllowedKeys>;
  edges: GraphEdge[];
}

export interface TechAnalyser {
  tech: Set<AllowedKeys>;
  services: Service[];
}
