import path from 'node:path';

import { Payload } from '../payload';
import type { BaseProvider } from '../provider/base';
import { IGNORED_DIVE_PATHS } from '../provider/base';
import { rules, rulesServices } from '../rules';

export interface TechAnalyserOptions {
  provider: any;
}

async function recursive(
  provider: BaseProvider,
  pl: Payload,
  filePath: string
): Promise<void> {
  const files = await provider.listDir(filePath);

  // Detect services
  for (const rule of rulesServices) {
    const res = await rule(files, provider);
    if (!res) {
      continue;
    }

    pl.merge(res);
  }

  // Detect Tech
  for (const rule of rules) {
    const res = await rule(files);
    if (!res) {
      continue;
    }

    pl.addTech(res.key);
  }

  // Recursively dive in folders
  for (const file of files) {
    if (file.type === 'file') {
      pl.detectLang(file.name);
      continue;
    }
    if (IGNORED_DIVE_PATHS.includes(file.name)) {
      continue;
    }

    await recursive(provider, pl, path.join(filePath, file.name));
  }
}

export async function techAnalyser(
  opts: TechAnalyserOptions
): Promise<Payload> {
  const provider = opts.provider;
  const pl = new Payload('main', '/');

  await recursive(provider, pl, '/');

  return pl;
}
