import { l } from '../../../common/log.js';
import { Payload } from '../../../payload/index.js';
import { detect } from '../../../rules.js';
import type { Analyser } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES = ['deno.lock'];

interface Lockfile {
  version: string;
  remote?: Record<string, string>;
}

export const detectDenoLockfile: ComponentMatcher = async (files, provider) => {
  for (const file of files) {
    if (!FILES.includes(file.name)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    let json: Lockfile;
    try {
      json = JSON.parse(content);
    } catch (e) {
      l.warn('Failed to parse deno.lock', file.fp, e);
      return false;
    }

    if (!json.version) {
      return false;
    }

    const deps = {
      ...(json.remote || {}),
    };

    const techs = detect(Object.keys(deps), 'deno');
    const depsFlatten: Analyser['dependencies'] = Object.entries(deps).map(
      (dep) => {
        return ['deno', dep[0], dep[1]];
      }
    );

    const pl = new Payload({
      name: 'virtual',
      folderPath: file.fp,
      dependencies: depsFlatten,
    });
    pl.addTechs([...techs]);

    return pl;
  }

  return false;
};
