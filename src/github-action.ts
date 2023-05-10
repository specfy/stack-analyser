import core from '@actions/core';

import { analyser, FSProvider } from './index.js';

try {
  console.log('Starting Stack Analyser');

  const token = core.getInput('token', {
    required: true,
  });
  const workspace = process.env.GITHUB_WORKSPACE!;
  console.log('hello', token);
  console.log('workspace', workspace);

  const res = await analyser({
    provider: new FSProvider({
      path: workspace,
      ignorePaths: [],
    }),
  });

  console.log('Result:', res.toJson(workspace));

  console.log('Done');
} catch (error: unknown) {
  if (error instanceof Error) {
    core.setFailed(error.message);
  } else {
    core.setFailed('Unknown error');
  }
}
