import { register } from '../../register.js';

register({
  tech: 'phpunit',
  name: 'PHPUnit',
  type: 'tool',
  files: ['phpunit.xml.dist'],
  dependencies: [{ type: 'php', name: 'phpunit/phpunit' }],
});
