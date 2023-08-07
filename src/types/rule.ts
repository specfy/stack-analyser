import type { Payload } from '../payload/index.js';
import type { BaseProvider, ProviderFile } from '../provider/base.js';

import type { AllowedKeys, TechItem } from './techs.js';

export type SupportedDeps =
  | 'deno'
  | 'docker'
  | 'golang'
  | 'npm'
  | 'ruby'
  | 'rust'
  | 'terraform.resource'
  | 'terraform';

export type RuleDependency = {
  type: SupportedDeps;
} & (
  | {
      name: string;
    }
  | { name: RegExp; example: string }
);

export type Rule = {
  tech: AllowedKeys;
  dependencies?: RuleDependency[];
  detect?: ComponentMatcher | ComponentMatcher[];
} & (RuleFiles | never);
export type RuleFiles =
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

export type RuleWithFile = Pick<Rule, 'tech'> & RuleFiles;

export type ComponentMatcher = (
  files: ProviderFile[],
  provider: BaseProvider
) => Promise<Payload | Payload[] | false>;

export type TechMatcher = (files: ProviderFile[]) => TechItem | false;
