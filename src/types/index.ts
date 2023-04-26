import type { AllowedKeys, TechItem } from './techs';
import type { Modify } from './utils';

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
export type ServiceJson = Modify<Service, { techs: AllowedKeys[] }>;

export interface TechAnalyser {
  name: string;
  path: string;
  tech: AllowedKeys | null;
  techs: AllowedKeys[];
  services: ServiceJson[];
  languages: Record<string, number>;
}
