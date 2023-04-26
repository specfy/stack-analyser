import { parse } from 'yaml';

import { Payload } from '../../payload';
import type { BaseProvider, ProviderFile } from '../../provider/base';

import { detectImages } from './images';

const FILES = ['docker-compose.yml'];

interface DockerComposeService {
  image?: string;
  container_name?: string;
}

export async function detectDockerServices(
  files: ProviderFile[],
  provider: BaseProvider
): Promise<Payload | false> {
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

    const pl = new Payload('virtual', file.fp);

    for (const [name, service] of Object.entries<DockerComposeService>(
      parsed.services
    )) {
      pl.addService(
        new Payload(
          service.container_name || name,
          file.fp,
          service.image ? detectImages(service.image) : null
        )
      );
    }

    return pl;
  }

  return false;
}
