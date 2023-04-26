import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['expo.dev'];

export function detectEslint(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('expodev', files, FILES);
}
