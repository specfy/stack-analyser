import { listIndexed } from '../../register.js';

import type { Rule } from '../../index.js';
import type { ProviderFile } from '../../provider/base.js';
import type { AllowedKeys } from '../../types/techs.js';

export function matchFiles({
  key,
  files,
  matches,
  matchFullPath,
}: {
  key: AllowedKeys;
  files: ProviderFile[];
  matches: string[];
  matchFullPath?: boolean;
}): [Rule, string] | false {
  for (const file of files) {
    const name = matchFullPath ? file.fp : file.name;
    if (matches.includes(name)) {
      return [listIndexed[key], name];
    }
  }

  return false;
}

export function matchFilesRegex({
  key,
  files,
  match,
  matchFullPath,
}: {
  key: AllowedKeys;
  files: ProviderFile[];
  match: RegExp;
  matchFullPath?: boolean;
}): [Rule, string] | false {
  for (const file of files) {
    const name = matchFullPath ? file.fp : file.name;
    if (match.test(name)) {
      return [listIndexed[key], name];
    }
  }

  return false;
}

export function matchExtensions({
  key,
  list,
  extensions,
}: {
  key: AllowedKeys;
  list: string[];
  extensions: Set<string>;
}): [Rule, string] | false {
  for (const ext of list) {
    if (extensions.has(ext)) {
      return [listIndexed[key], ext];
    }
  }

  return false;
}
