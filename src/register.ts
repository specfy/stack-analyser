import type { Rule } from './types/rule.js';
import type { AllowedKeys } from './types/techs.js';

export const registeredTech = new Set<AllowedKeys>();
export const registeredRules: Rule[] = [];
export const listIndexed = {} as Record<AllowedKeys, Rule>;

export function register(rule: Rule): void {
  if (registeredTech.has(rule.tech)) {
    throw new Error(`Already registered ${rule.tech}`);
  }

  registeredTech.add(rule.tech);
  registeredRules.push(rule);
  listIndexed[rule.tech] = rule;
}
