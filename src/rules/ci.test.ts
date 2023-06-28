import { describe, expect, it } from 'vitest';

import { analyser } from '../analyser/index.js';
import { listIndexed } from '../common/techs.js';
import { FakeProvider } from '../provider/fake.js';
import { rawList } from '../rules.js';
import './index.js';

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

describe('ci', () => {
  it('should match everything', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': paths,
        },
        files: {},
      }),
    });
    expect(res.toJson('').techs).toStrictEqual([
      'appveyor',
      'browserstack',
      'circleci',
      'codesandboxci',
      'cypressci',
      'dependabot',
      'githubactions',
      'gitlabci',
      'javascript',
      'jenkins',
      'relativeci',
      'renovate',
      'teamcity',
      'travisci',
    ]);
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
    expect(res.toJson('').techs).toStrictEqual(['github', 'githubactions']);
  });
});
