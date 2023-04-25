import { listIndexed } from '../common/techs';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.eslintrc', '.eslintrc.cjs', '.eslintrc.json', '.eslintrc.js'];

export function detectEslint(files: ProviderFile[]): RuleTechReturn | false {
  for (const file of files) {
    if (FILES.includes(file.name)) {
      return listIndexed.eslint;
    }
  }

  return false;
}
