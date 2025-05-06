import { register } from '../../register.js';

register({
  tech: 'kysely',
  name: 'Kysely',
  type: 'orm',
  dependencies: [{ type: 'npm', name: 'kysely' }],
});
