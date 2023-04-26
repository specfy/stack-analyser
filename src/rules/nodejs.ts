import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['package.json', '.nvmrc'];

export function detectNodejs(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('nodejs', files, FILES);
}
