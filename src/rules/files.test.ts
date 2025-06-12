/* eslint-disable vitest/no-conditional-expect */
import { describe, expect, it } from 'vitest';

import { analyser } from '../analyser/index.js';
import { FakeProvider } from '../provider/fake.js';
import { registeredRules } from '../register.js';

import '../autoload.js';

describe('all', () => {
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

  it('should not match case insensitive', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['oPenApi.yaml'],
        },
        files: {
          '/oPenApi.yaml': '',
        },
      }),
    });

    expect(res.toJson('').techs).toStrictEqual([]);
  });
});
