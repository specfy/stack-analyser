import path from 'node:path';

import * as dotenv from 'dotenv';
import { Octokit } from 'octokit';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { FSProvider } from '../provider/fs';
import { GithubAPIProvider } from '../provider/githubApi';
import { cleanNestedSnapshot } from '../tests/helpers';

import { techAnalyser } from '.';

dotenv.config();

let id = 0;
vi.mock('../common/nid.ts', () => {
  return { nid: () => `${id++}` };
});

describe('techAnalyser', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should list from API', async () => {
    const res = await techAnalyser({
      provider: new GithubAPIProvider({
        path: '/tests/__fixtures__',
        octokit: new Octokit({
          auth: process.env.GITHUB_TOKEN,
        }),
        owner: 'specfy',
        repo: 'tech-analyser',
        hash: 'b0f26cec5cbb81eec2994f0e87bb4e78b3ca38f1',
      }),
    });

    expect(res.toJson('')).toMatchSnapshot();

    // Compare the github api and filesystem results
    // They should output the same thing
    const resFs = await techAnalyser({
      provider: new FSProvider({
        path: path.join(__dirname, '../../tests/__fixtures__'),
      }),
    });

    const root = path.join(__dirname, '../..');

    expect(cleanNestedSnapshot(res.toJson(root))).toStrictEqual(
      cleanNestedSnapshot(resFs.toJson(root))
    );
  });
});
