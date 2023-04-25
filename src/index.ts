import { techAnalyser } from './analyser';
import { FSProvider } from './provider/fs';

console.log('coucou');

(async () => {
  const res = await techAnalyser({
    provider: new FSProvider({
      path: '../specfy',
      ignorePaths: [],
    }),
  });

  console.log(res);
})();
