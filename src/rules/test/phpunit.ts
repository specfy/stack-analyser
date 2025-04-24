import { register } from '../../register.js';

register({
  tech: 'phpunit',
  name: 'PHPUnit',
  type: 'test',
  files: ['phpunit.xml.dist'],
  dependencies: [{ type: 'php', name: 'phpunit/phpunit' }],
});
