import path from 'node:path';

import * as hcl_parser from 'hcl2-parser';

import { listIndexed } from '../../../common/techs';
import { Payload } from '../../../payload';
import { detectDependencies } from '../../../rules';
import type { ComponentMatcher } from '../../../types/rule';

const FILES = ['.terraform.lock.hcl'];

export const detectTerraformComponent: ComponentMatcher = async (
  files,
  provider
) => {
  for (const file of files) {
    if (!FILES.includes(file.name)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let json: Record<string, any>;
    try {
      json = hcl_parser.parseToObject(content)[0];
    } catch (err) /* istanbul ignore next */ {
      return false;
    }

    if (!('provider' in json)) {
      return false;
    }

    // const techs = detectDependencies(Object.keys(json.provider), 'terraform');
    const pl = new Payload({
      name: 'virtual',
      folderPath: path.dirname(file.fp),
    });

    // We only register docker service with image and that we know
    for (const name of Object.keys(json.provider)) {
      const matched = [...detectDependencies([name], 'terraform')];
      if (!matched.length) {
        continue;
      }

      const tech = matched[0];

      pl.addComponent(
        new Payload({
          name: listIndexed[tech].name,
          folderPath: file.fp,
          tech,
          parent: pl,
        })
      );
    }

    return pl;
  }

  return false;
};
