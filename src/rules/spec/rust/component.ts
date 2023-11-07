import toml from 'toml';

import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { Analyser } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES = ['Cargo.toml'];

type Dependency =
  | string
  | {
      git: string;
      rev?: string;
      branch?: string;
    }
  | {
      path: string;
      version?: string;
    }
  | {
      version?: string;
    };

export const detectRustComponent: ComponentMatcher = async (
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

    let json: any;
    try {
      json = toml.parse(content);
    } catch (e) {
      l.warn('Failed to parse Cargo.toml', file.fp, e);
      continue;
    }

    let pl: Payload;

    if (json.package) {
      pl = new Payload({
        name: json.package.name,
        folderPath: file.fp,
      });
    } else {
      pl = new Payload({ name: 'virtual', folderPath: file.fp });
    }

    const deps: Record<string, Dependency> = {
      ...(json.dependencies || {}),
      ...(json['dev-dependencies'] || {}),
      ...(json['build-dependencies'] || {}),
      ...(json['workspace.dependencies'] || {}),
    };
    const techs = matchDependencies(Object.keys(deps), 'rust');
    const depsFlatten: Analyser['dependencies'] = Object.entries(deps).map(
      ([name, value]) => {
        if (typeof value === 'string') {
          return ['rust', name, value];
        }
        if ('path' in value) {
          return [
            'rust',
            name,
            `path:${value.path}${value.version ? `:${value.version}` : ''}`,
          ];
        }
        if ('git' in value) {
          return [
            'rust',
            name,
            `git:${value.git}#${value.branch || value.rev || 'latest'}`,
          ];
        }
        return ['rust', name, value.version || 'latest'];
      }
    );

    pl.addTechs(techs);
    pl.dependencies = depsFlatten;

    return pl;
  }

  return false;
};
