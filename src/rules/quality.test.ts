import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const filename = fileURLToPath(import.meta.url);
const RULES_DIR = path.dirname(filename);

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
