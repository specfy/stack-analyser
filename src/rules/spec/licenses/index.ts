import parse from 'spdx-expression-parse';

import type { AllowedLicenses } from '../../../types/licenses';

export function detectLicense(name: string): false | Set<AllowedLicenses> {
  try {
    const set = new Set<AllowedLicenses>();
    const parsed = parse(name);
    licenseOrConjunction(parsed, set);
    return set;
  } catch {
    return false;
  }
}

function licenseOrConjunction(info: parse.Info, set: Set<AllowedLicenses>): void {
  if ('license' in info) {
    set.add(info.license as AllowedLicenses);
    return;
  }

  licenseOrConjunction(info.left, set);
  licenseOrConjunction(info.right, set);
}
