import type { Rule } from './types/rule.js';
import type { AllowedKeys } from './types/techs.js';

export const registeredTech = new Set<AllowedKeys>();
export const registeredRules: Rule[] = [];
export const listIndexed: Record<AllowedKeys, Rule> = {} as any;
export const nameToKey: Record<string, AllowedKeys> = {} as any;

export function register(rule: Rule) {
  if (registeredTech.has(rule.tech)) {
    throw new Error(`Already registered ${rule.tech}`);
  }

  registeredTech.add(rule.tech);
  registeredRules.push(rule);
  listIndexed[rule.tech] = rule;
  nameToKey[rule.name] = rule.tech;
}
