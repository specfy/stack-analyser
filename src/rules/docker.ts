import { matchFiles } from '../common/rules/matchFiles';
import type { ProviderFile } from '../provider/base';
import type { RuleTechReturn } from '../types';

const FILES = ['.dockerignore', 'Dockerfile', 'docker-compose.yml'];

export function detectDocker(files: ProviderFile[]): RuleTechReturn | false {
  return matchFiles('docker', files, FILES);
}
