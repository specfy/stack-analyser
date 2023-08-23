import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import type { AllowedKeys } from '../../../index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('npm', () => {
  it('should match everything', async () => {
    const dependencies: Record<string, string> = {};
    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'npm') {
        continue;
      }
      dependencies['example' in item.ref ? item.ref.example : item.ref.name] =
        '0.0.0';
    }
    const packageJson = {
      name: 'test',
      dependencies,
    };

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['package.json'],
        },
        files: {
          '/package.json': JSON.stringify(packageJson),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });

  it('should match nothing', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['package.json'],
        },
        files: {
          '/package.json': JSON.stringify({ foo: 'bar' }),
        },
      }),
    });
    const match: AllowedKeys[] = ['nodejs'];
    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual(match);
  });
});
