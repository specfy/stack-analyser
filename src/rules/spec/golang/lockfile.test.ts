import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('golang (lockfile)', () => {
  it('should match everything', async () => {
    const deps = [];
    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'golang') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      deps.push(`	${example} v1.0.0`);
    }
    const lockfile: string[] = [
      `module github.com/specfy/specfy

go 1.19
require (
${deps.join('\n')}
)`,
    ];

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
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
