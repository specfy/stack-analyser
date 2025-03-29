import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';

import type { Analyser } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';
import type { FullVersion } from 'package-json';

const FILES = new Set(['package.json']);

export const detectNodeComponent: ComponentMatcher = async (files, provider) => {
  for (const file of files) {
    if (!FILES.has(file.name)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let json: FullVersion;
    try {
      json = JSON.parse(content);
    } catch (err) {
      l.warn('Failed to parse package.json', file.fp, err);
      continue;
    }

    if (!json.name) {
      continue;
    }

    const deps = {
      ...json.dependencies,
      ...json.devDependencies,
    };
    const techs = matchDependencies(Object.keys(deps), 'npm');
    const depsFlatten: Analyser['dependencies'] = Object.entries(deps).map(
      (dep: [string, string]) => {
        return ['npm', dep[0], dep[1]];
      }
    );

    const pl = new Payload({
      name: json.name,
      folderPath: file.fp,
      dependencies: depsFlatten,
    });
    pl.addTechs(techs);

    return pl;
  }

  return false;
};
