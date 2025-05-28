import path from 'node:path';

import toml from '@iarna/toml';

import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import { detectLicense } from '../licenses/index.js';

import type { ProviderFile } from '../../../provider/base.js';
import type { Dependency } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const LOCKFILE = 'requirements.txt';
const PROJECT = 'pyproject.toml';
const lineReg = /(^([a-zA-Z0-9._-]+)$|^([a-zA-Z0-9._-]+)(([>=]+)([0-9.]+)))/;

interface Pyproject {
  project?: {
    license?: { file?: string; text?: string } | string;
    dependencies?: string[];
  };
}

export const detectPythonLockfile: ComponentMatcher = async (files, provider) => {
  for (const file of files) {
    if (file.name === PROJECT) {
      const content = await provider.open(file.fp);
      if (!content) {
        continue;
      }

      const pl = new Payload({
        name: 'virtual',
        folderPath: path.dirname(file.fp),
      });
      const res = parsePyproject({ content, pl, file });
      if (!res) {
        continue;
      }

      return pl;
    } else if (file.name === LOCKFILE) {
      const content = await provider.open(file.fp);
      if (!content) {
        continue;
      }

      const pl = new Payload({
        name: 'virtual',
        folderPath: path.dirname(file.fp),
      });
      parseRequirementsTxt(content, pl);

      return pl;
    } else {
      continue;
    }
  }

  return false;
};

export function parseRequirementsTxt(content: string, pl: Payload): void {
  const dependencies: Dependency[] = [];

  for (const line of content.split(/\r?\n/)) {
    if (line.startsWith('#')) {
      continue;
    }

    const match = line.match(lineReg);
    if (!match) {
      continue;
    }

    const name = match[2] || match[3];
    const version = match[6] || 'latest';

    if (!name) {
      continue;
    }

    dependencies.push(['python', name, version || 'latest']);
    const matched = matchDependencies([name], 'python');
    if (matched.size <= 0) {
      continue;
    }

    pl.addTechs(matched);
  }

  pl.dependencies = [...dependencies];
}

export function parsePyproject({
  content,
  pl,
  file,
}: {
  content: string;
  pl: Payload;
  file: ProviderFile;
}): boolean {
  let json: Pyproject;
  try {
    json = toml.parse(content) as unknown as Pyproject;
  } catch (err) {
    l.warn('Failed to parse pyproject.toml', file.fp, err);
    return false;
  }

  if (!('project' in json) || !json.project) {
    return false;
  }

  const prj = json.project;
  if ('license' in prj) {
    const tmp = typeof prj.license === 'string' ? prj.license : prj.license?.text;
    if (tmp) {
      const lic = detectLicense(tmp);
      if (lic !== false) {
        pl.addLicenses(lic);
      }
    }
  }

  if (prj.dependencies) {
    const dependencies: Dependency[] = [];
    for (const dep of prj.dependencies) {
      const match = dep.match(lineReg);
      if (!match) {
        continue;
      }

      const name = match[2] || match[3];
      const version = match[6] || 'latest';
      if (!name) {
        continue;
      }

      dependencies.push(['python', name, version || 'latest']);
      const matched = matchDependencies([name], 'python');
      if (matched.size <= 0) {
        continue;
      }

      pl.addTechs(matched);
    }

    pl.dependencies = [...dependencies];
  }
  return true;
}
