import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import type { AllowedKeys } from '../../../index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('terraform (lockfile)', () => {
  it('should match everything', async () => {
    const lockfile: string[] = [``];

    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'terraform') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      lockfile.push(`
      provider "${example}" {
        version = "0.0.0"
      }
    `);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.terraform.lock.hcl'],
        },
        files: {
          '/.terraform.lock.hcl': lockfile.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toMatchSnapshot();
  });

  it('should match nothing', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.terraform.lock.hcl'],
        },
        files: {
          '/.terraform.lock.hcl': '',
        },
      }),
    });

    const match: AllowedKeys[] = ['terraform'];
    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual(match);
  });
});
