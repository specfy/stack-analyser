import { Payload } from '../payload';

export interface TechAnalyserOptions {
  provider: any;
}

export async function techAnalyser(
  opts: TechAnalyserOptions
): Promise<Payload> {
  const provider = opts.provider;
  const pl = new Payload({ name: 'main', folderPath: '/', type: 'project' });

  await pl.recurse(provider, '/');

  return pl;
}
