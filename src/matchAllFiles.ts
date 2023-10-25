import { rulesTechs } from './loader.js';

import type { AllowedKeys, ProviderFile } from './index.js';

export function matchAllFiles(
  files: ProviderFile[],
  basePath: string
): Map<AllowedKeys, string[]> {
  const matched = new Map<AllowedKeys, string[]>();
  for (const rule of rulesTechs) {
    const res = rule(files);
    if (!res) {
      continue;
    }

    matched.set(res[0].tech, [`matched file: ${res[1].replace(basePath, '')}`]);
  }

  return matched;
}
