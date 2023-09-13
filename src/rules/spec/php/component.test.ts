import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import type { AllowedKeys } from '../../../index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';
import type { ComposerJson } from './component.js';

describe('php', () => {
  it('should match everything', async () => {
    const dependencies: Record<string, string> = {};
    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'php') {
        continue;
      }
      dependencies['example' in item.ref ? item.ref.example : item.ref.name] =
        '0.0.0';
    }
    const composerJson: ComposerJson = {
      name: 'test',
      'require-dev': dependencies,
    };

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['composer.json'],
        },
        files: {
          '/composer.json': JSON.stringify(composerJson),
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
          '/': ['composer.json'],
        },
        files: {
          '/composer.json': JSON.stringify({ foo: 'bar' }),
        },
      }),
    });
    const match: AllowedKeys[] = ['php'];
    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual(match);
  });
});
