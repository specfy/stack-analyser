import { listIndexed } from '../common/techs';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'];

export function detectTerraform(files: ProviderFile[]): RuleTechReturn | false {
  for (const file of files) {
    if (FILES.includes(file.name)) {
      return listIndexed.terraform;
    }
  }

  return false;
}
