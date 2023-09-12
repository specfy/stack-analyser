import { matchFiles, matchFilesRegex } from './common/rules/matchFiles.js';
import { registeredRules } from './register.js';
import type {
  ComponentMatcher,
  Rule,
  RuleDependency,
  RuleWithFile,
  SupportedDeps,
  TechMatcher,
} from './types/rule.js';
import type { AllowedKeys } from './types/techs.js';

export const rulesTechs: TechMatcher[] = [];

export const rulesComponents: ComponentMatcher[] = [];

export const dependencies: Record<
  SupportedDeps,
  Array<{ match: RegExp; tech: AllowedKeys }>
> = {
  'terraform.resource': [],
  deno: [],
  docker: [],
  golang: [],
  npm: [],
  php: [],
  ruby: [],
  rust: [],
  terraform: [],
  githubAction: [],
};

export const rawList: Array<
  | ({ ref: RuleDependency } & { type: 'dependency' })
  | ({ ref: RuleWithFile } & { type: 'file' })
> = [];

export function loadAllRules() {
  for (const rule of registeredRules) {
    loadOne(rule);
  }
}

export function loadOne(rule: Rule) {
  if (rule.dependencies) {
    rule.dependencies.map((dep) => {
      dependencies[dep.type].push({
        match:
          typeof dep.name === 'string' ? new RegExp(`^${dep.name}$`) : dep.name,
        tech: rule.tech,
      });
      rawList.push({ type: 'dependency', ref: dep });
    });
  }

  if (typeof rule.files !== 'undefined') {
    let matcher: TechMatcher;
    if (Array.isArray(rule.files)) {
      matcher = (files) => {
        return matchFiles(
          rule.tech,
          files,
          rule.files as string[],
          'matchFullPath' in rule ? rule.matchFullPath : false
        );
      };
    } else {
      matcher = (files) => {
        return matchFilesRegex(
          rule.tech,
          files,
          rule.files as RegExp,
          'matchFullPath' in rule ? rule.matchFullPath : false
        );
      };
    }

    rawList.push({ type: 'file', ref: rule });
    rulesTechs.push(matcher);
  }

  if (rule.detect) {
    rulesComponents.push(
      ...(Array.isArray(rule.detect) ? rule.detect : [rule.detect])
    );
  }
}
