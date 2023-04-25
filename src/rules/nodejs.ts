import { listIndexed } from '../common/techs';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['package.json', '.nvmrc'];

export function detectNodejs(files: ProviderFile[]): RuleTechReturn | false {
  for (const file of files) {
    if (FILES.includes(file.name)) {
      return listIndexed.nodejs;
    }
  }

  return false;
}
