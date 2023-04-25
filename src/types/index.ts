export interface GraphEdge {
  to: string;
  read: boolean;
  write: boolean;
  vertices: Array<{ x: number; y: number }>;
  portSource: 'bottom' | 'left' | 'right' | 'top';
  portTarget: 'bottom' | 'left' | 'right' | 'top';
}

export interface RuleTechReturn {
  name: string;
  type: TechType;
}

export type RuleServiceReturn = Omit<Service, 'tech'>;

export type TechType =
  | 'db'
  | 'hosting'
  | 'language'
  | 'messaging'
  | 'sass'
  | 'tool';

export interface TechSummary {
  language: Set<string>;
  db: Set<string>;
  hosting: Set<string>;
  sass: Set<string>;
  messaging: Set<string>;
  tool: Set<string>;
}

export interface Service {
  name: string;
  path: string;
  tech: TechSummary;
  edges: GraphEdge[];
}

export interface TechAnalyser {
  tech: TechSummary;
  services: Service[];
}
