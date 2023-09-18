import { describe, expect, it } from 'vitest';

import { registeredRules, registeredTech } from '../register.js';

import '../autoload.js';

describe('all', () => {
  it('should match everything', async () => {
    expect(Array.from(registeredTech.values()).sort()).toMatchSnapshot();
  });

  it('should not list multiple times the same files', () => {
    const files = new Set<string>();
    for (const rule of registeredRules) {
      if (!rule.files) {
        continue;
      }
      if (rule.files instanceof RegExp) {
        const str = rule.files.toString();
        if (files.has(str)) {
          expect(rule.files).toBe(false);
          continue;
        }

        files.add(str);
        continue;
      }

      for (const file of rule.files) {
        if (files.has(file)) {
          expect(file).toBe(false);
          continue;
        }

        files.add(file);
      }
    }
  });
});
