import path from 'node:path';

import * as hcl_parser from 'hcl2-parser';

import { listIndexed } from '../../../common/techs.js';
import { Payload } from '../../../payload/index.js';
import { detect } from '../../../rules.js';
import type { ComponentMatcher } from '../../../types/rule.js';

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

    // const techs = detect(Object.keys(json.provider), 'terraform');
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
