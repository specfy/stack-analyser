import path from 'node:path';

import type { FullVersion } from 'package-json';

import { Payload } from '../../payload';
import type { BaseProvider, ProviderFile } from '../../provider/base';

import { detectDependencies } from './dependencies';

const FILES = ['package.json'];

export async function detectNodeService(
  files: ProviderFile[],
  provider: BaseProvider
): Promise<Payload | false> {
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

    const techs = detectDependencies(json);

    const pl = new Payload(json.name, path.dirname(file.fp));
    pl.addTech([...techs]);

    return pl;
  }

  return false;
}
