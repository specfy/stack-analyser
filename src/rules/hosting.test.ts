import { describe, expect, it } from 'vitest';

import { techAnalyser } from '../analyser';
import { listIndexed } from '../common/techs';
import { FakeProvider } from '../provider/fake';
import { rawList } from '../rules';
import '.';

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

describe('npm', () => {
  it('should match everything', async () => {
    const res = await techAnalyser({
      provider: new FakeProvider({
        paths: {
          '/': paths,
        },
        files: {},
      }),
    });
    expect(res.toJson().techs).toStrictEqual([
      'expodev',
      'flyio',
      'netlify',
      'render',
      'vercel',
    ]);
  });
});
