#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { analyser } from './analyser/index.js';
import { FSProvider } from './provider/fs.js';

(async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filename);

  const res = await analyser({
    provider: new FSProvider({
      path: dirname,
      ignorePaths: [],
    }),
  });

  console.log(res);
})();
