import { register } from '../../../rules.js';

import { detectDockerComponent } from './component.js';

register({
  tech: 'docker',
  files: ['.dockerignore', 'Dockerfile', 'docker-compose.yml'],
  detect: detectDockerComponent,
});
