import { dependencies } from './loader.js';

import type { AllowedKeys, SupportedDeps } from './index.js';

export function matchDependencies(
  pkgs: string[],
  type: SupportedDeps
): Map<AllowedKeys, string[]> {
  const matched = new Map<AllowedKeys, string[]>();
  for (const dep of pkgs) {
    for (const ref of dependencies[type]) {
      if (ref.match.test(dep)) {
        if (matched.has(ref.tech)) {
          matched.set(ref.tech, [
            ...matched.get(ref.tech)!,
            `matched: ${ref.tech}`,
          ]);
        } else {
          matched.set(ref.tech, [`${ref.tech} matched: ${ref.match}`]);
        }
      }
    }
  }

  return matched;
}
