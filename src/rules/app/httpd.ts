import { register } from '../../rules.js';

register({
  tech: 'httpd',
  files: ['httpd.conf'],
  dependencies: [{ type: 'docker', name: /httpd/, example: 'httpd:0.0.0' }],
});
