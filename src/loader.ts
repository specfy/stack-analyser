import { matchExtensions, matchFiles, matchFilesRegex } from './common/rules/matchFiles.js';
import { registeredRules } from './register.js';
import { matchDotEnv } from './rules/spec/dotenv/matcher.js';

import type {
  ComponentMatcher,
  DotEnvMatcher,
  ExtensionMatcher,
  Rule,
  RuleDependency,
  RuleWithDotEnv,
  RuleWithFile,
  SupportedDeps,
  TechMatcher,
} from './types/rule.js';
import type { AllowedKeys } from './types/techs.js';

export const rulesTechs: TechMatcher[] = [];
export const rulesExtensions: ExtensionMatcher[] = [];
export const rulesDotEnv: DotEnvMatcher[] = [];
export const rulesComponents: ComponentMatcher[] = [];

export const dependencies: Record<SupportedDeps, { match: RegExp; tech: AllowedKeys }[]> = {
  'terraform.resource': [],
  deno: [],
  docker: [],
  golang: [],
  npm: [],
  php: [],
  python: [],
  ruby: [],
  rust: [],
  terraform: [],
  githubAction: [],
};

export const rawList: (
  | ({ ref: RuleDependency } & { type: 'dependency' })
  | ({ ref: RuleWithDotEnv } & { type: 'dotenv' })
  | ({ ref: RuleWithFile } & { type: 'ext' })
  | ({ ref: RuleWithFile } & { type: 'file' })
)[] = [];

export function loadAllRules(): void {
  for (const rule of registeredRules) {
    loadOne(rule);
  }

  // console.debug('Loaded', registeredRules.length, 'rules');
}

export function loadOne(rule: Rule): void {
  if (rule.dependencies) {
    rule.dependencies.map((dep) => {
      if (dep.name === '') {
        throw new Error(`empty dependency name for ${rule.name} (${rule.type} > ${rule.tech})`);
      }
      dependencies[dep.type].push({
        match: typeof dep.name === 'string' ? new RegExp(`^${dep.name}$`) : dep.name,
        tech: rule.tech,
      });
      rawList.push({ type: 'dependency', ref: dep });
    });
  }

  if (rule.files !== undefined) {
    let matcher: TechMatcher;
    if (Array.isArray(rule.files)) {
      matcher = (files) => {
        return matchFiles({
          key: rule.tech,
          files,
          matches: rule.files as string[],
          matchFullPath: 'matchFullPath' in rule ? rule.matchFullPath : false,
        });
      };
    } else {
      matcher = (files) => {
        return matchFilesRegex({
          key: rule.tech,
          files,
          match: rule.files as RegExp,
          matchFullPath: 'matchFullPath' in rule ? rule.matchFullPath : false,
        });
      };
    }

    rawList.push({ type: 'file', ref: rule });
    rulesTechs.push(matcher);
  }

  if (rule.extensions !== undefined) {
    const matcher: ExtensionMatcher = (list) => {
      return matchExtensions({ key: rule.tech, list: rule.extensions!, extensions: list });
    };

    rawList.push({ type: 'ext', ref: rule });
    rulesExtensions.push(matcher);
  }

  if (Array.isArray(rule.dotenv) && rule.dotenv.length > 0) {
    const matcher: DotEnvMatcher = (content) => {
      return matchDotEnv({ key: rule.tech, list: rule.dotenv!, content });
    };

    rawList.push({ type: 'dotenv', ref: rule as RuleWithDotEnv });
    rulesDotEnv.push(matcher);
  }

  if (rule.detect) {
    rulesComponents.push(...(Array.isArray(rule.detect) ? rule.detect : [rule.detect]));
  }
}
