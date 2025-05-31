import { register } from '../../register.js';

register({
  tech: 'tursodb',
  name: 'Turso',
  type: 'db',
  dependencies: [{ type: 'npm', name: '@tursodatabase/api' }],
});
