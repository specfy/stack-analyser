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
  ret: TechAnalyser,
  filePath: string
): Promise<void> {
  const files = await provider.listDir(filePath);

  for (const rule of rulesServices) {
    const res = await rule(files, provider);
    if (!res) {
      continue;
    }

    ret.services.push({
      ...res,
      tech: {
        language: new Set(),
        db: new Set(),
        hosting: new Set(),
        sass: new Set(),
        messaging: new Set(),
        tool: new Set(),
      },
    });
  }

  for (const rule of rules) {
    const res = await rule(files);
    if (!res) {
      continue;
    }

    ret.tech[res.type].add(res.name);
  }

  for (const file of files) {
    if (file.type === 'file') {
      continue;
    }
    if (IGNORED_DIVE_PATHS.includes(file.name)) {
      continue;
    }

    await recursive(provider, ret, path.join(filePath, file.name));
  }
}

export async function techAnalyser(
  opts: TechAnalyserOptions
): Promise<TechAnalyser> {
  const provider = opts.provider;
  const ret: TechAnalyser = {
    tech: {
      language: new Set(),
      db: new Set(),
      hosting: new Set(),
      sass: new Set(),
      messaging: new Set(),
      tool: new Set(),
    },
    services: [],
  };

  await recursive(provider, ret, '/');

  return ret;
}
