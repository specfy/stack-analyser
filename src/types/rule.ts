import type { Payload } from '../payload';
import type { BaseProvider, ProviderFile } from '../provider/base';

import type { AllowedKeys, TechItem } from './techs';

export type SupportedDeps = 'docker' | 'npm';

export interface Rule {
  tech: AllowedKeys;
  matchFullPath?: boolean;
  files?: RegExp | string[];
  dependencies?: Array<{ type: SupportedDeps; name: RegExp | string }>;
  detect?: ComponentMatcher;
}

export type ComponentMatcher = (
  files: ProviderFile[],
  provider: BaseProvider
) => Promise<Payload | false>;

export type TechMatcher = (files: ProviderFile[]) => TechItem | false;
