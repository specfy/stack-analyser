import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

import { detectDocker } from './docker';
import { detectEslint } from './eslint';
import { detectNodejs } from './nodejs';
import { detectNodeService } from './nodejs/service';
import { detectStylelint } from './stylelint';
import { detectTerraform } from './terraform';
import { detectTypescript } from './typescript';

export const rules: Array<
  | ((files: ProviderFile[]) => Promise<RuleTechReturn | false>)
  | ((files: ProviderFile[]) => RuleTechReturn | false)
> = [
    detectEslint,
    detectDocker,
    detectStylelint,
    detectNodejs,
    detectTypescript,
    detectTerraform,
  ];

export const rulesServices = [detectNodeService];
