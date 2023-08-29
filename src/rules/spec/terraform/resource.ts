import path from 'node:path';

import { parse } from '@cdktf/hcl2json';

import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import { listIndexed } from '../../../register.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILE = /\.tf$/;

export const detectTerraformResource: ComponentMatcher = async (
  files,
  provider
) => {
  const pls: Payload[] = [];
  for (const file of files) {
    if (!FILE.test(file.name)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let json: Record<string, any>;
    try {
      json = await parse(file.fp, content);
    } catch (err) {
      l.warn('Failed to parse HCL', file.fp, err);
      continue;
    }

    if (!('resource' in json)) {
      continue;
    }

    const pl = new Payload({
      name: 'virtual',
      folderPath: path.dirname(file.fp),
    });

    // We only register docker service with image and that we know
    for (const name of Object.keys(json.resource)) {
      const matched = [...matchDependencies([name], 'terraform.resource')];
      if (!matched.length) {
        continue;
      }

      const tech = matched[0];

      pl.addChild(
        new Payload({
          name: listIndexed[tech[0]].name,
          folderPath: file.fp,
          tech: tech[0],
          parent: pl,
          dependencies: [['terraform.resource', name, 'unknown']],
          reason: tech[1][0],
        })
      );
    }

    pls.push(pl);
  }

  return pls.length > 0 ? pls : false;
};
