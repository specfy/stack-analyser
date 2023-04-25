import path from 'node:path';

import type { FullVersion } from 'package-json';

import type { BaseProvider, ProviderFile } from '../../provider/base';
import type { RuleServiceReturn } from '../../types';

import { detectDependencies } from './dependencies';

const FILES = ['package.json'];

export async function detectNodeService(
  files: ProviderFile[],
  provider: BaseProvider
): Promise<RuleServiceReturn | false> {
  for (const file of files) {
    if (!FILES.includes(file.name)) {
      continue;
    }
    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let json: FullVersion;
    try {
      json = JSON.parse(content);
    } catch (e) {
      return false;
    }

    if (!json.name) {
      return false;
    }

    const tech = detectDependencies(json);

    return { name: json.name, path: path.dirname(file.fp), edges: [], tech };
  }

  return false;
}
