import { listIndexed } from '../common/techs';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = /tsconfig(.[a-zA-Z0-9_-]+)?.json/;

export function detectTypescript(
  files: ProviderFile[]
): RuleTechReturn | false {
  for (const file of files) {
    if (file.name.match(FILES)) {
      return listIndexed.typescript;
    }
  }

  return false;
}
