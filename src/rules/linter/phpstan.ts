import { register } from '../../register.js';

register({
  tech: 'phpstan',
  name: 'PHPStan',
  type: 'linter',
  files: ['phpstan.neon'],
  dependencies: [{ type: 'php', name: 'phpstan/phpstan' }],
});
