import path from 'node:path';

import * as dotenv from 'dotenv';
import { Octokit } from 'octokit';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';

import { FSProvider } from '../provider/fs.js';
import { GithubAPIProvider } from '../provider/githubApi.js';
import { cleanNestedSnapshot } from '../tests/helpers.js';

import { analyser } from './index.js';

let id = 0;
vi.mock('../common/nid.ts', () => {
  return { nid: () => `${id++}` };
});

describe('analyser', () => {
  beforeAll(() => {
    dotenv.config();
  });

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it(
    'should list from API',
    async () => {
      const sha =
        process.env.GITHUB_SHA || 'b0f26cec5cbb81eec2994f0e87bb4e78b3ca38f1';

      const res = await analyser({
        provider: new GithubAPIProvider({
          path: '/tests/__fixtures__',
          octokit: new Octokit({
            auth: process.env.GITHUB_TOKEN,
            request: {
              timeout: 1000,
              retries: 0,
            },
          }),
          owner: 'specfy',
          repo: 'tech-analyser',
          hash: sha,
        }),
      });

      expect(res.toJson('')).toMatchSnapshot();

      // Compare the github api and filesystem results
      // They should output the same thing
      const resFs = await analyser({
        provider: new FSProvider({
          path: path.join(__dirname, '../../tests/__fixtures__'),
        }),
      });

      const root = path.join(__dirname, '../..');

      expect(cleanNestedSnapshot(res.toJson(root))).toStrictEqual(
        cleanNestedSnapshot(resFs.toJson(root))
      );
    },
    { timeout: 10000 }
  );
});
