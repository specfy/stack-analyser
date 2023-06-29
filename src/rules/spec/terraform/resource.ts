import path from 'node:path';

import { parse } from '@cdktf/hcl2json';

import { listIndexed } from '../../../common/techs.js';
import { Payload } from '../../../payload/index.js';
import { detect } from '../../../rules.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILE = /.tf$/;

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
      console.warn('Failed to parse HCL', err);
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
      const matched = [...detect([name], 'terraform.resource')];
      if (!matched.length) {
        continue;
      }

      const tech = matched[0];

      pl.addChild(
        new Payload({
          name: listIndexed[tech].name,
          folderPath: file.fp,
          tech,
          parent: pl,
          dependencies: [['terraform.resource', name, 'unknown']],
        })
      );
    }

    pls.push(pl);
  }

  return pls.length > 0 ? pls : false;
};
