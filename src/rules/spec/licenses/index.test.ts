import { describe, expect, it } from 'vitest';

import { detectLicense } from '.';

describe('detectLicense', () => {
  it('should detect a single license', () => {
    const license = detectLicense('MIT');

    expect(license).toStrictEqual(new Set(['MIT']));
  });

  it('should detect handle spdx', () => {
    const license = detectLicense('(LGPL-2.1 OR BSD-3-Clause AND MIT)');

    expect(license).toStrictEqual(new Set(['LGPL-2.1', 'BSD-3-Clause', 'MIT']));
  });

  it('should not match exotic', () => {
    const license = detectLicense('MYLICENSE');

    expect(license).toStrictEqual(false);
  });

  it('should not match exotic and correct', () => {
    const license = detectLicense('MIT OR LICENSE');

    expect(license).toStrictEqual(false);
  });
});
