import type { Payload } from '../payload/index.js';
import type { BaseProvider, ProviderFile } from '../provider/base.js';

import type { AllowedKeys, TechType } from './techs.js';

export type SupportedDeps =
  | 'deno'
  | 'docker'
  | 'githubAction'
  | 'golang'
  | 'npm'
  | 'php'
  | 'python'
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
  name: string;
  type: TechType;
  dependencies?: RuleDependency[];
  detect?: ComponentMatcher | ComponentMatcher[];
  extensions?: string[];
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

export type TechMatcher = (files: ProviderFile[]) => false | [Rule, string];
export type ExtensionMatcher = (list: Set<string>) => false | [Rule, string];
