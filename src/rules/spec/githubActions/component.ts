import { parse } from 'yaml';

import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { Dependency } from '../../../types/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

export const FILE_REG = /.github\/workflows\/.+\.y(a)?ml/;

interface Step {
  name?: string;
  uses?: string; // Interesting
  run?: string;
  with?: Record<string, string>;
}

interface GitHubActionsFile {
  name?: string;
  on?: any;
  jobs: Record<
    string,
    {
      container?: string; // interesting
      'runs-on': string;
      'timeout-minutes': number;
      env?: Record<string, string>;
      services?: Record<
        string,
        {
          image?: string; // interesting
        }
      >;
      steps?: Step[];
    }
  >;
}

export const detectGithubActionsComponent: ComponentMatcher = async (
  files,
  provider
) => {
  for (const file of files) {
    if (!FILE_REG.test(file.fp)) {
      continue;
    }

    const content = await provider.open(file.fp);
    if (!content) {
      l.warn('Failed to open GitHub Actions file', file.fp);
      continue;
    }

    const parsed: GitHubActionsFile = parse(content, {});
    if (!parsed?.jobs) {
      l.warn('Failed to parse GitHub Actions file', file.fp);
      return false;
    }

    const pl = new Payload({ name: 'virtual', folderPath: file.fp });

    const dependencies: Dependency[] = [];
    for (const [, config] of Object.entries(parsed.jobs)) {
      if (config.steps) {
        for (const step of config.steps) {
          if (step.uses) {
            const [name, version] = step.uses.split('@');
            dependencies.push(['githubAction', name, version]);
            const matched = matchDependencies([name], 'githubAction');
            if (matched.size > 0) {
              pl.addTechs(matched);
            }
          }
        }
      }

      if (config.container) {
        const [imageName, imageVersion] = config.container.split(':');
        dependencies.push(['docker', imageName, imageVersion]);
        const matched = matchDependencies([imageName], 'docker');
        if (matched.size > 0) {
          pl.addTechs(matched);
        }
      }

      if (config.services) {
        for (const [, service] of Object.entries(config.services)) {
          if (!service.image) {
            continue;
          }
          const [imageName, imageVersion] = service.image.split(':');
          dependencies.push(['docker', imageName, imageVersion]);
          const matched = matchDependencies([imageName], 'docker');
          if (matched.size > 0) {
            pl.addTechs(matched);
          }
        }
      }
    }

    pl.dependencies = [...dependencies];
    return pl;
  }

  return false;
};
