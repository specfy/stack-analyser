import { describe, expect, it } from 'vitest';

import { analyser } from '../analyser/index.js';
import type { AllowedKeys } from '../index.js';
import { rawList } from '../loader.js';
import { FakeProvider } from '../provider/fake.js';
import { listIndexed } from '../register.js';

import '../autoload.js';

describe('ci', () => {
  it('should match everything', async () => {
    const paths: string[] = [];
    for (const item of rawList) {
      if (
        item.type !== 'file' ||
        listIndexed[item.ref.tech].type !== 'ci' ||
        !item.ref.files
      ) {
        continue;
      }

      paths.push('example' in item.ref ? item.ref.example : item.ref.files[0]);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': paths,
        },
        files: {
          '/.github/workflows/ci.yml': '', // we open this file
        },
      }),
    });
    expect(res.toJson('').techs).toMatchSnapshot();
  });

  it('enforce that we match .github', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.github/'],
          '/.github': ['workflows/'],
          '/.github/workflows': ['main.yml'],
        },
        files: {
          '/.github/workflows/main.yml': '',
        },
      }),
    });
    const match: AllowedKeys[] = ['github', 'github.actions'];
    expect(res.toJson('').techs).toStrictEqual(match);
  });
});
