import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { rawList } from '../../../rules.js';

describe('rust (component)', () => {
  it('should match everything', async () => {
    const lockfile: string[] = [
      `[package]
name = "svix-server"
version = "1.8.0"

[dependencies]
`,
    ];

    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'rustcargo') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      lockfile.push(`${example} = "1.0.0"\n`);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['Cargo.toml'],
        },
        files: {
          '/Cargo.toml': lockfile.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(merged.techs).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
