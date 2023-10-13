import { register } from '../../register.js';

register({
  tech: 'laravel',
  name: 'Laravel',
  type: 'framework',
  files: ['artisan'],
  dependencies: [{ type: 'php', name: 'laravel/framework' }],
});
