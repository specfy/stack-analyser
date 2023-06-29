import { describe, expect, it } from 'vitest';

import { analyser } from '../analyser/index.js';
import { listIndexed } from '../common/techs.js';
import type { AllowedKeys } from '../index.js';
import { FakeProvider } from '../provider/fake.js';
import { rawList } from '../rules.js';
import './index.js';

const paths: string[] = [];
for (const item of rawList) {
  if (
    item.type !== 'file' ||
    listIndexed[item.ref.tech].type !== 'hosting' ||
    !item.ref.files
  ) {
    continue;
  }

  paths.push('example' in item.ref ? item.ref.example : item.ref.files[0]);
}

describe('hosting', () => {
  it('should match everything with files', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': paths,
        },
        files: {},
      }),
    });
    const match: AllowedKeys[] = [
      'expodev',
      'flyio',
      'github.pages',
      'heroku',
      'netlify',
      'platformsh',
      'render',
      'vercel',
    ];
    expect(res.toJson('').techs).toStrictEqual(match);
  });
});
