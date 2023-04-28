import { parse } from 'yaml';

import { Payload } from '../../../payload';
import { detectDependencies } from '../../../rules';
import type { ComponentMatcher } from '../../../types/rule';

const FILES = ['docker-compose.yml'];

interface DockerComposeService {
  image?: string;
  container_name?: string;
}

export const detectDockerComponent: ComponentMatcher = async (
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

    const parsed = parse(content, {});
    if (!parsed?.services) {
      return false;
    }

    const pl = new Payload({ name: 'virtual', folderPath: file.fp });

    for (const [name, service] of Object.entries<DockerComposeService>(
      parsed.services
    )) {
      let tech: Payload['tech'] = null;
      if (service.image) {
        const matched = [...detectDependencies([service.image], 'docker')];
        if (matched.length > 0) {
          tech = matched[0];
        }
      }

      pl.addComponent(
        new Payload({
          name: service.container_name || name,
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
