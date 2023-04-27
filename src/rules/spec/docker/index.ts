import { register } from '../../../rules';

import { detectDockerComponent } from './component';

register({
  tech: 'docker',
  files: ['.dockerignore', 'Dockerfile', 'docker-compose.yml'],
  detect: detectDockerComponent,
});
