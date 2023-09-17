import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';
import { detectGithubActionsComponent } from './component.js';

describe('docker', () => {
  it('should match all dependencies', async () => {
    const yml: string[] = [
      `name: Main
on:
  push:
    branches: [ main ]

jobs:
  ci:
    container: node:18.17.1
    runs-on: ubuntu-latest
    timeout-minutes: 15
    services:
      postgres:
        env:
          POSTGRES_PASSWORD: postgres
        image: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s

    env:
      OPENAI_KEY: ""

    steps:
      - name: Check out repository code
        run: npm test`,
    ];
    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'githubAction') {
        continue;
      }

      const example =
        'example' in item.ref ? item.ref.example : `${item.ref.name}@1`;
      const [name] = example.split('@');
      yml.push(`
      - name: ${name}
        uses: ${example}
    `);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.github/'],
          '/.github': ['workflows/'],
          '/.github/workflows': ['main.yml'],
        },
        files: {
          '/.github/workflows/main.yml': yml.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });

  it('should gracefully fail to parse', async () => {
    const res = await detectGithubActionsComponent(
      [{ fp: '/.github/workflows/main.yml', name: 'main.yml', type: 'file' }],
      new FakeProvider({
        paths: {
          '/': ['.github/'],
          '/.github': ['workflows/'],
          '/.github/workflows': ['main.yml'],
        },
        files: {
          '/.github/workflows/main.yml': '',
        },
      })
    );

    expect(res).toBe(false);
  });
});
