import path from 'node:path';

import { parse } from '@cdktf/hcl2json';

import { l } from '../../../common/log.js';
import { listIndexed } from '../../../common/techs.js';
import { Payload } from '../../../payload/index.js';
import { detect } from '../../../rules.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const LOCKFILE = '.terraform.lock.hcl';

export const detectTerraformLockfile: ComponentMatcher = async (
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

    let json: Record<string, any>;
    try {
      json = await parse(file.fp, content);
    } catch (err) {
      l.warn('Failed to parse HCL', file.fp, err);
      return false;
    }

    if (!('provider' in json)) {
      return false;
    }

    const pl = new Payload({
      name: 'virtual',
      folderPath: path.dirname(file.fp),
    });

    // We only register docker service with image and that we know
    for (const name of Object.keys(json.provider)) {
      const matched = [...detect([name], 'terraform')];
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
          dependencies: [
            ['terraform', name, json.provider[name][0].version || 'latest'],
          ],
        })
      );
    }

    return pl;
  }

  return false;
};
