import { detectDockerComponent } from './component.js';
import { register } from '../../../register.js';

register({
  tech: 'docker',
  name: 'Docker',
  type: 'tool',
  files: ['.dockerignore', 'Dockerfile', 'docker-compose.yml', 'docker-compose.yaml'],
  detect: detectDockerComponent,
  dependencies: [{ type: 'githubAction', name: 'docker/login-action' }],
});
