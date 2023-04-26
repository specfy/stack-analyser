import type { ProviderFile } from '../../provider/base';
import type { AllowedKeys } from '../../types/techs';
import { listIndexed } from '../techs';

export function matchFiles(
  key: AllowedKeys,
  files: ProviderFile[],
  matches: string[]
) {
  for (const file of files) {
    if (matches.includes(file.name)) {
      return listIndexed[key];
    }
  }

  return false;
}

export function matchFilesRegex(
  key: AllowedKeys,
  files: ProviderFile[],
  match: RegExp
) {
  for (const file of files) {
    if (match.test(file.name)) {
      return listIndexed[key];
    }
  }

  return false;
}
