import { register } from '../../register.js';

register({
  tech: 'httpd',
  name: 'HTTPD',
  type: 'app',
  files: ['httpd.conf'],
  dependencies: [{ type: 'docker', name: /httpd/, example: 'httpd:0.0.0' }],
});
