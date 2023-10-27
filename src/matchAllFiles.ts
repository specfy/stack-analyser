import path from 'node:path';

import { rulesExtensions, rulesTechs } from './loader.js';

import type { AllowedKeys, ProviderFile } from './index.js';

export function matchAllFiles(
  files: ProviderFile[],
  basePath: string
): Map<AllowedKeys, string[]> {
  const matched = new Map<AllowedKeys, string[]>();

  // Match files
  for (const rule of rulesTechs) {
    const res = rule(files);
    if (!res) {
      continue;
    }

    matched.set(res[0].tech, [`matched file: ${res[1].replace(basePath, '')}`]);
  }

  // Match extensions
  const exts = new Set<string>();
  for (const file of files) {
    exts.add(path.extname(file.name));
  }
  for (const rule of rulesExtensions) {
    const res = rule(exts);
    if (!res) {
      continue;
    }
    if (matched.has(res[0].tech)) {
      continue;
    }

    matched.set(res[0].tech, [`matched extension: ${res[1]}`]);
  }

  return matched;
}
