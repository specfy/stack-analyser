import { listIndexed } from '../common/techs';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.dockerignore', 'Dockerfile', 'docker-compose.yml'];

export function detectDocker(files: ProviderFile[]): RuleTechReturn | false {
  for (const file of files) {
    if (FILES.includes(file.name)) {
      return listIndexed.docker;
    }
  }

  return false;
}
