import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.circleci'];

export function detectEslint(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('circleci', files, FILES);
}
