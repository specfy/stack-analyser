/* eslint-disable vitest/no-conditional-expect */
import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { dependencies, rawList } from '../loader.js';
import { registeredRules } from '../register.js';
import '../autoload.js';

const RULES_DIR = import.meta.dirname;

function getTypeFromFile(filePath: string): null | string {
  const content = fs.readFileSync(filePath, 'utf8');
  // Simple regex to extract type: 'value' or type: "value"
  const match = content.match(/type:\s*['"]([a-zA-Z0-9_]+)['"]/);
  return match ? match[1] : null;
}

describe('folder matches rule type', () => {
  const entries = fs.readdirSync(RULES_DIR, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }
    if (entry.name === '__snapshots__') {
      continue;
    }

    const folder = entry.name;
    const folderPath = path.join(RULES_DIR, folder);
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      if (!file.endsWith('.ts')) {
        continue;
      }
      if (file === 'index.ts') {
        continue;
      }

      const filePath = path.join(folderPath, file);

      it(`${path.basename(filePath)} type = '${folder}'`, () => {
        const type = getTypeFromFile(filePath);

        expect(type).toBe(folder);
      });
    }
  }
});

describe('no duplicate', () => {
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
        let matched: null | string = null;
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
