import { Payload } from '../payload';
import type { BaseProvider } from '../provider/base';

export interface TechAnalyserOptions {
  provider: BaseProvider;
}

export async function techAnalyser(
  opts: TechAnalyserOptions
): Promise<Payload> {
  const provider = opts.provider;
  const pl = new Payload({ name: 'main', folderPath: '/' });

  await pl.recurse(provider, provider.basePath);

  return pl;
}
