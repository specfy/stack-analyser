import { register } from '../../register.js';

register({
  tech: 'surrealdb',
  name: 'SurrealDB',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'surrealdb/surrealdb' },
    { type: 'npm', name: 'surrealdb.js' },
  ],
});
