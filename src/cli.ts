#!/usr/bin/env node

import { analyser } from './analyser';
import { FSProvider } from './provider/fs';

(async () => {
  const res = await analyser({
    provider: new FSProvider({
      path: __dirname,
      ignorePaths: [],
    }),
  });

  console.log(res);
})();
