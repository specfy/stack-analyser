import path from 'node:path';

import type { BaseProvider } from '../provider/base';
import { IGNORED_DIVE_PATHS } from '../provider/base';
import { rules, rulesServices } from '../rules';
import type { TechAnalyser } from '../types';

export interface TechAnalyserOptions {
  provider: any;
}

async function recursive(
  provider: BaseProvider,
  pl: TechAnalyser,
  filePath: string
): Promise<void> {
  const files = await provider.listDir(filePath);

  // Detect services
  for (const rule of rulesServices) {
    const res = await rule(files, provider);
    if (!res) {
      continue;
    }

    pl.services.push(...res);
  }

  // Detect Tech
  for (const rule of rules) {
    const res = await rule(files);
    if (!res) {
      continue;
    }

    pl.tech.add(res.key);
  }

  // Recursively dive in folders
  for (const file of files) {
    if (file.type === 'file') {
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
): Promise<TechAnalyser> {
  const provider = opts.provider;
  const pl: TechAnalyser = {
    tech: new Set(),
    services: [],
  };

  await recursive(provider, pl, '/');

  return pl;
}
