import path from 'node:path';

import { parse } from '@cdktf/hcl2json';

import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import { listIndexed } from '../../../register.js';
import type { Dependency } from '../../../types/index.js';
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
      continue;
    }

    if (!('provider' in json)) {
      continue;
    }

    const pl = new Payload({
      name: 'virtual',
      folderPath: path.dirname(file.fp),
    });
    const dependencies: Dependency[] = [];

    // We only register docker service with image and that we know
    for (const name of Object.keys(json.provider)) {
      const matched = [...matchDependencies([name], 'terraform')];
      dependencies.push([
        'terraform',
        name,
        json.provider[name][0].version || 'latest',
      ]);

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
          dependencies: [
            ['terraform', name, json.provider[name][0].version || 'latest'],
          ],
          reason: tech[1][0],
        })
      );
    }
    pl.dependencies = dependencies;

    return pl;
  }

  return false;
};
