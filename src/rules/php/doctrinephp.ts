import { register } from '../../register.js';

register({
  tech: 'doctrinephp',
  name: 'Doctrine',
  type: 'tool',
  files: ['artisan'],
  dependencies: [
    { type: 'php', name: 'doctrine/orm', example: 'doctrine/lexer' },
  ],
});
