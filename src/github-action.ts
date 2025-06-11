/* eslint-disable unicorn/filename-case */
import fs from 'node:fs/promises';
import path from 'node:path';

import { setFailed } from '@actions/core';

import { l } from './common/log.js';
import { FSProvider, analyser } from './index.js';
import './autoload.js';

try {
  l.log('Starting Stack Analyser');

  // Because we exec the GitHub Action in a docker env the repo path is in the env var
  const workspace = process.env.GITHUB_WORKSPACE!;
  l.log('workspace', workspace);

  if (!workspace) {
    throw new Error('No workspace env specified');
  }

  // Analyze
  const res = await analyser({
    provider: new FSProvider({ path: workspace }),
  });

  l.log('Result:', res.toJson(workspace));

  // Output to file
  const file = path.join(workspace, 'stack-output.json');
  l.log('Output to file', file);

  await fs.writeFile(file, JSON.stringify(res.toJson(workspace), undefined, 2));

  l.log('Done');
} catch (err: unknown) {
  if (err instanceof Error) {
    setFailed(err.message);
  } else {
    setFailed('Unknown error');
  }
}
