import { register } from '../../register.js';

register({
  tech: 'knex',
  name: 'Knex',
  type: 'orm',
  dependencies: [{ type: 'npm', name: 'knex' }],
});
