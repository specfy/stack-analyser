import { register } from '../../register.js';

register({
  tech: 'laravel',
  name: 'Laravel',
  type: 'tool',
  files: ['artisan'],
  dependencies: [{ type: 'php', name: 'laravel/framework' }],
});
