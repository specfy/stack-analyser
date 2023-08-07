import { dependencies } from './loader.js';

import type { AllowedKeys, SupportedDeps } from './index.js';

export function matchDependencies(
  pkgs: string[],
  type: SupportedDeps
): Set<AllowedKeys> {
  const matched = new Set<AllowedKeys>();
  for (const dep of pkgs) {
    for (const ref of dependencies[type]) {
      if (ref.match.test(dep)) {
        matched.add(ref.tech);
      }
    }
  }

  return matched;
}
