import path from 'node:path';

import type { FullVersion } from 'package-json';

import { Payload } from '../../../payload';
import { detectDependencies } from '../../../rules';
import type { ComponentMatcher } from '../../../types/rule';

const FILES = ['package.json'];

export const detectNodeComponent: ComponentMatcher = async (
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

    let json: FullVersion;
    try {
      json = JSON.parse(content);
    } catch (e) {
      return false;
    }

    if (!json.name) {
      return false;
    }

    const deps = {
      ...(json.dependencies || {}),
      ...(json.devDependencies || {}),
    };
    const techs = detectDependencies(Object.keys(deps), 'npm');

    const pl = new Payload({
      name: json.name,
      folderPath: path.dirname(file.fp),
    });
    pl.addTech([...techs]);

    return pl;
  }

  return false;
};
