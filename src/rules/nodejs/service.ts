import path from 'node:path';

import type { BaseProvider, ProviderFile } from '../../provider/base';
import type { RuleServiceReturn } from '../../types';

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

    let json;
    try {
      json = JSON.parse(content);
    } catch (e) {
      return false;
    }

    if (!json.name) {
      return false;
    }

    return { name: json.name, path: path.dirname(file.fp), edges: [] };
  }

  return false;
}
