import path from 'node:path';

import { Payload } from '../../../payload/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES_REG = /^main.go$/;

export const detectGolangComponent: ComponentMatcher = async (files) => {
  for (const file of files) {
    if (!FILES_REG.test(file.name)) {
      continue;
    }

    const folderName = path.basename(path.dirname(file.fp));
    const pl = new Payload({
      name: folderName,
      folderPath: file.fp,
      tech: 'golang',
    });

    return pl;
  }

  return false;
};
