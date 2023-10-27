import { describe, expect, it } from 'vitest';

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

  // eslint-disable-next-line vitest/no-commented-out-tests
  // it('should not list multiple times the same extensions', () => {
  //   const exts = new Set<string>();
  //   for (const rule of registeredRules) {
  //     if (!rule.extensions) {
  //       continue;
  //     }

  //     for (const ext of rule.extensions) {
  //       if (exts.has(ext)) {
  //         console.error(ext);
  //         // expect(ext).toBe(false);
  //         continue;
  //       }

  //       exts.add(ext);
  //     }
  //   }
  // });
});
