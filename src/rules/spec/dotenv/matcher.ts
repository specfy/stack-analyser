import { listIndexed } from '../../../register.js';

import type { Rule } from '../../../types/rule';
import type { AllowedKeys } from '../../../types/techs';

export function matchDotEnv({
  key,
  list,
  content,
}: {
  key: AllowedKeys;
  list: string[];
  content: string;
}): [Rule, string] | false {
  for (const pattern of list) {
    if (content.includes(pattern)) {
      return [listIndexed[key], pattern];
    }
  }

  return false;
}
