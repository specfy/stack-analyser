import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { Analyser } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES = ['Gemfile'];

const NEW_LINE_REG = /\r?\n/;
const DEP_REG = /gem "(.+)",\s+("(.+)")?/;

export const detectRubyLockfile: ComponentMatcher = async (files, provider) => {
  for (const file of files) {
    if (!FILES.includes(file.name)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      continue;
    }

    const lines = content.split(NEW_LINE_REG);

    const pl = new Payload({ name: 'virtual', folderPath: file.fp });

    const deps: Record<string, string> = {};
    for (const line of lines) {
      const match = line.match(DEP_REG);
      if (!match) {
        continue;
      }

      deps[match[1]] = match[3] || 'latest';
    }

    const techs = matchDependencies(Object.keys(deps), 'ruby');
    const depsFlatten: Analyser['dependencies'] = Object.entries(deps).map(
      ([name, value]) => {
        return ['ruby', name, value || 'latest'];
      }
    );

    pl.addTechs(techs);
    pl.dependencies = depsFlatten;

    return pl;
  }

  return false;
};
