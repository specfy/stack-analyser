import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('python (lockfile)', () => {
  it('should match everything', async () => {
    const deps = [];
    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'python') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      deps.push(`${example}==1.0.0`);
    }

    const lockfile: string = deps.join('\n');

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['requirements.txt'],
        },
        files: {
          '/requirements.txt': lockfile,
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });

  it('should match weird syntax', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['requirements.txt'],
        },
        files: {
          '/requirements.txt': [
            // No version
            'tensorflow',
            // gte
            'algoliasearch>=1.9.1',
            // gte-lt
            'datadog>=1.4.3,<7.0.0',
          ].join('\n'),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
