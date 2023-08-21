import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('ruby (component)', () => {
  it('should match everything', async () => {
    const lockfile: string[] = [
      `# frozen_string_literal: true

source "https://rubygems.org"
`,
    ];

    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'ruby') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      lockfile.push(`gem "${example}", "1.0.0"\n`);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['Gemfile'],
        },
        files: {
          '/Gemfile': lockfile.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
