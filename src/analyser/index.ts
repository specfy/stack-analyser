import { Payload } from '../payload';
import type { BaseProvider } from '../provider/base';

export interface AnalyserOptions {
  provider: BaseProvider;
}

export async function analyser(opts: AnalyserOptions): Promise<Payload> {
  const provider = opts.provider;
  const pl = new Payload({ name: 'main', folderPath: '/' });

  await pl.recurse(provider, provider.basePath);

  return pl;
}
