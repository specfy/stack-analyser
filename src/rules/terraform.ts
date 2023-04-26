import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'];

export function detectTerraform(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('terraform', files, FILES);
}
