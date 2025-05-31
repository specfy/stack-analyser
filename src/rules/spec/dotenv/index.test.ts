import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('dotenv', () => {
  it('should match all dependencies', async () => {
    const env: string[] = [];
    for (const item of rawList) {
      if (item.type !== 'dotenv' || !('dotenv' in item.ref)) {
        continue;
      }

      env.push(`${item.ref.dotenv.map((v) => `${v}KEY=example`).join('\r\n')}`);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.env.example'],
        },
        files: {
          '/.env.example': env.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });

    expect([...merged.techs].sort()).toMatchSnapshot();
    expect([...merged.dependencies].sort()).toMatchSnapshot();
  });
});
