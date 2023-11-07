import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { Analyser } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES = ['composer.json'];

export interface ComposerJson {
  name: string;
  require?: Record<string, string>;
  'require-dev'?: Record<string, string>;
}

export const detectPhpComponent: ComponentMatcher = async (files, provider) => {
  for (const file of files) {
    if (!FILES.includes(file.name)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let json: ComposerJson;
    try {
      json = JSON.parse(content);
    } catch (e) {
      l.warn('Failed to parse composer.json', file.fp, e);
      continue;
    }

    if (!json.name) {
      continue;
    }

    const deps = {
      ...(json.require || {}),
      ...(json['require-dev'] || {}),
    };
    const techs = matchDependencies(Object.keys(deps), 'php');
    const depsFlatten: Analyser['dependencies'] = Object.entries(deps).map(
      (dep: [string, string]) => {
        return ['php', dep[0], dep[1]];
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
