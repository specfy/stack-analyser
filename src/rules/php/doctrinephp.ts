import { register } from '../../register.js';

register({
  tech: 'doctrinephp',
  name: 'Doctrine',
  type: 'tool',
  dependencies: [{ type: 'php', name: 'doctrine/orm' }],
});
