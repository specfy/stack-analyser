import type { ProviderFile } from '../../provider/base';
import type { AllowedKeys } from '../../types/techs';
import { listIndexed } from '../techs';

export function matchFiles(
  key: AllowedKeys,
  files: ProviderFile[],
  matches: string[],
  matchFullPath?: boolean
) {
  for (const file of files) {
    const name = matchFullPath ? file.fp : file.name;
    if (matches.includes(name)) {
      return listIndexed[key];
    }
  }

  return false;
}

export function matchFilesRegex(
  key: AllowedKeys,
  files: ProviderFile[],
  match: RegExp,
  matchFullPath?: boolean
) {
  for (const file of files) {
    const name = matchFullPath ? file.fp : file.name;
    if (match.test(name)) {
      return listIndexed[key];
    }
  }

  return false;
}
