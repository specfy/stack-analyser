import type { Payload } from '../payload';
import type { BaseProvider, ProviderFile } from '../provider/base';

import type { AllowedKeys, TechItem } from './techs';

export type SupportedDeps = 'docker' | 'npm';

export type RuleDependency = {
  type: SupportedDeps;
} & (
    | {
      name: string;
    }
    | { name: RegExp; example: string }
  );
export type Rule = RuleFiles & {
  tech: AllowedKeys;
  dependencies?: RuleDependency[];
  detect?: ComponentMatcher;
};
type RuleFiles =
  | never
  | {
    files: RegExp;
    example: string;
  }
  | {
    files: string[];
  }
  | {
    files?: never;
  }
  | {
    matchFullPath: boolean;
    files: RegExp;
    example: string;
  };

export type ComponentMatcher = (
  files: ProviderFile[],
  provider: BaseProvider
) => Promise<Payload | false>;

export type TechMatcher = (files: ProviderFile[]) => TechItem | false;
