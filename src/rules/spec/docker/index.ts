import { register } from '../../../rules.js';

import { detectDockerComponent } from './component.js';

register({
  tech: 'docker',
  files: [
    '.dockerignore',
    'Dockerfile',
    'docker-compose.yml',
    'docker-compose.yaml',
  ],
  detect: detectDockerComponent,
});
