import { matchFilesRegex } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = /tsconfig(.[a-zA-Z0-9_-]+)?.json/;

export function detectTypescript(
  files: ProviderFile[]
): RuleTechReturn | false {
  return matchFilesRegex('typescript', files, FILES);
}
