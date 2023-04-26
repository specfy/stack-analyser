import { parse } from 'yaml';

import type { BaseProvider, ProviderFile } from '../../provider/base';
import type { RuleServiceReturn, Service } from '../../types';

import { detectImages } from './images';

const FILES = ['docker-compose.yml'];

interface DockerComposeService {
  image?: string;
  container_name?: string;
}

export async function detectDockerServices(
  files: ProviderFile[],
  provider: BaseProvider
): Promise<RuleServiceReturn | false> {
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

    const services: Service[] = [];
    for (const [name, service] of Object.entries<DockerComposeService>(
      parsed.services
    )) {
      services.push({
        name: service.container_name || name,
        path: file.fp,
        tech: service.image ? detectImages(service.image) : null,
        techs: new Set(),
        edges: [],
      });
    }

    return services;
  }

  return false;
}
