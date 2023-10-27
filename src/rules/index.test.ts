import { describe, expect, it } from 'vitest';

import { dependencies, rawList } from '../loader.js';
import { registeredRules, registeredTech } from '../register.js';

import '../autoload.js';

describe('all', () => {
  it('should match everything', async () => {
    expect(Array.from(registeredTech.values()).sort()).toMatchSnapshot();
  });

  it('should not list multiple times the same name', () => {
    const names = new Set<string>();
    for (const rule of registeredRules) {
      if (names.has(rule.name)) {
        expect(rule.name).toBe(false);
        continue;
      }

      names.add(rule.name);
    }
  });

  it('should not list multiple times the same dependencies', () => {
    const deps = new Set<string>();
    for (const rule of registeredRules) {
      if (!rule.dependencies) {
        continue;
      }

      for (const dep of rule.dependencies) {
        const str = `${dep.type}||${dep.name}`;
        if (deps.has(str)) {
          expect(str).toBe(false);
          continue;
        }

        deps.add(str);
      }
    }
  });

  it('should not multiple tech', () => {
    for (const [name, matchers] of Object.entries(dependencies)) {
      const examples = new Set<string>();

      for (const item of rawList) {
        if (item.type !== 'dependency' || item.ref.type !== name) {
          continue;
        }

        const ex = 'example' in item.ref ? item.ref.example : item.ref.name;
        if (examples.has(ex)) {
          expect(ex).toBe(false);
          continue;
        }

        examples.add(ex);
      }

      for (const ex of examples) {
        let matched: string | null = null;
        for (const matcher of matchers) {
          if (!matcher.match.test(ex)) {
            continue;
          }
          if (matched) {
            if (matched.split('.')[0] === matcher.tech.split('.')[0]) {
              // Skip hosting
              continue;
            }
            throw new Error(
              `Dependency "${ex}" (${name}) was already matched by "${matched}", and again by "${matcher.tech}"`
            );
          }
          matched = matcher.tech;
        }
      }
    }
  });
});
