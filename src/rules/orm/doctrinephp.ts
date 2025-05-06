import { register } from '../../register.js';

register({
  tech: 'doctrinephp',
  name: 'Doctrine',
  type: 'orm',
  dependencies: [{ type: 'php', name: 'doctrine/orm' }],
});
