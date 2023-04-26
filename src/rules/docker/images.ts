import { listIndexed } from '../../common/techs';
import type { AllowedKeys, TechItem } from '../../types/techs';

const DEPS: Array<{ regexp: RegExp; tech: TechItem }> = [
  { regexp: /postgres/, tech: listIndexed.postgresql },
];

export function detectImages(image: string): AllowedKeys | null {
  for (const dep of DEPS) {
    if (dep.regexp.test(image)) {
      return dep.tech.key;
    }
  }

  return null;
}
