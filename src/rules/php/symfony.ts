import { register } from '../../register.js';

register({
  tech: 'symfony',
  name: 'Symfony',
  type: 'tool',
  files: ['artisan'],
  dependencies: [{ type: 'php', name: /^symfony\//, example: 'symfony/yaml' }],
});
