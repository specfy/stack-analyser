import path from 'node:path';

import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { Dependency } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const LOCKFILE = 'requirements.txt';
const lineReg = /(^([a-zA-Z0-9._-]+)$|^([a-zA-Z0-9._-]+)(([>=]+)([0-9.]+)))/;

export const detectPythonLockfile: ComponentMatcher = async (
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
      if (line.startsWith('#')) {
        continue;
      }

      const match = line.match(lineReg);
      if (!match) {
        continue;
      }

      const name = match[2] || match[3];
      const version = match[6] || 'latest';

      if (!name) {
        continue;
      }

      dependencies.push(['python', name, version || 'latest']);
      const matched = matchDependencies([name], 'python');
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
