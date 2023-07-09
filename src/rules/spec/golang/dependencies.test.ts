import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { rawList } from '../../../rules.js';

describe('golang (lockfile)', () => {
  it('should match everything', async () => {
    const lockfile: string[] = [
      `
module github.com/specfy/specfy

go 1.19
require (
`,
    ];

    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'gomod') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      lockfile.push(`	${example} v1.0.0\n`);
    }
    lockfile.push(')');

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['go.mod'],
        },
        files: {
          '/go.mod': lockfile.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(merged.techs).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
