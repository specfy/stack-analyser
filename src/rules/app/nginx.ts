import { register } from '../../register.js';

register({
  tech: 'nginx',
  name: 'Nginx',
  type: 'app',
  files: ['nginx.conf'],
  dependencies: [{ type: 'docker', name: /nginx/, example: 'nginx:0.0.0' }],
});
