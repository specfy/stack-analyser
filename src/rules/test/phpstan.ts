import { register } from '../../register.js';

register({
  tech: 'phpstan',
  name: 'PHPStan',
  type: 'test',
  files: ['phpstan.neon'],
  dependencies: [{ type: 'php', name: 'phpstan/phpstan' }],
});
