import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.eslintrc', '.eslintrc.cjs', '.eslintrc.json', '.eslintrc.js'];

export function detectEslint(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('eslint', files, FILES);
}
