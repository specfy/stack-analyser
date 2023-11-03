import fs from 'node:fs/promises';
import path from 'node:path';

import core from '@actions/core';

import { l } from './common/log.js';

import { analyser, FSProvider } from './index.js';
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
} catch (error: unknown) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed('Unknown error');
  }
}
