import { matchFiles, matchFilesRegex } from './common/rules/matchFiles.js';
import type {
  ComponentMatcher,
  Rule,
  RuleDependency,
  RuleWithFile,
  SupportedDeps,
  TechMatcher,
} from './types/rule.js';
import type { AllowedKeys } from './types/techs.js';

const registeredTech = new Set<AllowedKeys>();

export const rulesTechs: TechMatcher[] = [];

export const rulesComponents: ComponentMatcher[] = [];

export const dependencies: Record<
  SupportedDeps,
  Array<{ match: RegExp; tech: AllowedKeys }>
> = {
  npm: [],
  docker: [],
  terraform: [],
};

export const rawList: Array<
  | ({ ref: RuleDependency } & { type: 'dependency' })
  | ({ ref: RuleWithFile } & { type: 'file' })
> = [];

export function register(rule: Rule) {
  if (registeredTech.has(rule.tech)) {
    throw new Error(`Already registered ${rule.tech}`);
  }

  registeredTech.add(rule.tech);

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
    rulesComponents.push(rule.detect);
  }
}

export function detect(pkgs: string[], type: SupportedDeps): Set<AllowedKeys> {
  const matched = new Set<AllowedKeys>();
  for (const dep of pkgs) {
    for (const ref of dependencies[type]) {
      if (ref.match.test(dep)) {
        matched.add(ref.tech);
      }
    }
  }

  return matched;
}
