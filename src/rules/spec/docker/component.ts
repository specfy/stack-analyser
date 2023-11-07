import { parse } from 'yaml';

import { l } from '../../../common/log.js';
import { matchDependencies } from '../../../matchDependencies.js';
import { Payload } from '../../../payload/index.js';
import type { ComponentMatcher } from '../../../types/rule.js';

const FILES_REG = /^docker-compose(.*)?\.y(a)?ml$/;

interface DockerCompose {
  services: {
    [key: string]: DockerComposeService;
  };
}
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

    let parsed: DockerCompose;
    try {
      parsed = parse(content, {});
      if (!parsed?.services) {
        l.warn('Failed to parse Docker file', file.fp);
        continue;
      }
    } catch (err) {
      l.warn('Failed to parse', file.fp, err);
      continue;
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
      const [imageName, imageVersion] = service.image.split(':');
      const matched = [...matchDependencies([imageName], 'docker')];
      if (imageName.startsWith('$')) {
        continue;
      }

      const tech = matched[0];
      pl.addChild(
        new Payload({
          name: service.container_name || name,
          folderPath: file.fp,
          tech: tech ? tech[0] : null,
          parent: pl,
          dependencies: [['docker', imageName, imageVersion || 'latest']],
          reason: tech ? tech[1] : `matched: ${imageName}`,
        })
      );
    }

    return pl;
  }

  return false;
};
