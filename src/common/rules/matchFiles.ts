import type { ProviderFile } from '../../provider/base.js';
import type { AllowedKeys } from '../../types/techs.js';
import { listIndexed } from '../techs.js';

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
