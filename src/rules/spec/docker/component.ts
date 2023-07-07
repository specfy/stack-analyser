import { parse } from 'yaml';

import { Payload } from '../../../payload/index.js';
import { detect } from '../../../rules.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES_REG = /^docker-compose(.*)?\.y(a)?ml$/;

interface DockerComposeService {
  image?: string;
  container_name?: string;
}

export const detectDockerComponent: ComponentMatcher = async (
  files,
  provider
) => {
  for (const file of files) {
    if (!FILES_REG.test(file.name)) {
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
      const matched = [...detect([service.image], 'docker')];
      const [imageName, imageVersion] = service.image.split(':');
      if (imageName.startsWith('$')) {
        continue;
      }

      pl.addChild(
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
