import path from 'node:path';

import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { Dependency } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const LOCKFILE = 'go.mod';
const lineReg = /[\t](.+)\sv(.+)/;

export const detectGolangLockfile: ComponentMatcher = async (
  files,
  provider
) => {
  for (const file of files) {
    if (file.name !== LOCKFILE) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    const pl = new Payload({
      name: 'virtual',
      folderPath: path.dirname(file.fp),
    });

    const dependencies: Dependency[] = [];
    // We only register docker service with image and that we know
    for (const line of content.split(/\r?\n/)) {
      if (!lineReg.test(line)) {
        continue;
      }

      const [url, version, comment, ...rest] = line.substring(1).split(' ');
      if (rest.length > 0 || comment) {
        // Skip false positive and '// indirect'
        continue;
      }

      dependencies.push(['golang', url, version || 'latest']);
      const matched = matchDependencies([url], 'golang');
      if (matched.size <= 0) {
        continue;
      }

      pl.addTechs(matched);
    }

    pl.dependencies = [...dependencies];

    return pl;
  }

  return false;
};
