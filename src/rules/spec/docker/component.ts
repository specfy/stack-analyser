import { parse } from 'yaml';

import { Payload } from '../../../payload/index.js';
import { detectDependencies } from '../../../rules.js';
import type { ComponentMatcher } from '../../../types/rule.js';

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
      if (!service.image) {
        continue;
      }

      // If we don't match, it's fine because docker is mostly made for services
      // It's better to have few false positive, than a lot of missing components
      const matched = [...detectDependencies([service.image], 'docker')];
      const [imageName, imageVersion] = service.image.split(':');

      pl.addComponent(
        new Payload({
          name: service.container_name || name,
          folderPath: file.fp,
          tech: matched[0],
          parent: pl,
          dependencies: [['docker', imageName, imageVersion || 'latest']],
        })
      );
    }

    return pl;
  }

  return false;
};
