import core from '@actions/core';

import { l } from './common/log.js';

import { analyser, FSProvider } from './index.js';

try {
  l.log('Starting Stack Analyser');

  const token = core.getInput('token', {
    required: true,
  });
  const workspace = process.env.GITHUB_WORKSPACE!;
  l.log('hello', token);
  l.log('workspace', workspace);

  const res = await analyser({
    provider: new FSProvider({
      path: workspace,
      ignorePaths: [],
    }),
  });

  l.log('Result:', res.toJson(workspace));

  l.log('Done');
} catch (error: unknown) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed('Unknown error');
  }
}
