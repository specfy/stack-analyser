import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = [
  '.stylelint',
  '.stylelintrc.cjs',
  '.stylelintrc.json',
  '.stylelintrc.js',
];

export function detectStylelint(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('stylelint', files, FILES);
}
