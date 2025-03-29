import type { AllowedKeys, TechType } from './techs.js';
import type { MaybePromise } from './utils.js';
import type { Payload } from '../payload/index.js';
import type { BaseProvider, ProviderFile } from '../provider/base.js';

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
  | { name: RegExp; example: string }
  | {
      name: string;
    }
);

export type Rule = {
  tech: AllowedKeys;
  name: string;
  type: TechType;
  dependencies?: RuleDependency[];
  detect?: ComponentMatcher | ComponentMatcher[];
  extensions?: string[];
} & (never | RuleFiles);

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
) => MaybePromise<false | Payload | Payload[]>;

export type TechMatcher = (files: ProviderFile[]) => [Rule, string] | false;
export type ExtensionMatcher = (list: Set<string>) => [Rule, string] | false;
