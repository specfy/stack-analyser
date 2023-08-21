import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('deno', () => {
  it('should match everything', async () => {
    const dependencies: Record<string, string> = {};
    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'deno') {
        continue;
      }
      dependencies['example' in item.ref ? item.ref.example : item.ref.name] =
        '60cb4ec8bd335bf241ef785ccec51e809d576ff8e8d29da43d2273b69ce2a6ff';
    }
    const lockfile = {
      version: '2',
      remote: dependencies,
    };

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['deno.lock'],
        },
        files: {
          '/deno.lock': JSON.stringify(lockfile),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
