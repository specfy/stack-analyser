import { register } from '../../register.js';

register({
  tech: 'tursodb',
  name: 'Turso',
  type: 'db',
  dotenv: ['TURSO_'],
  dependencies: [{ type: 'npm', name: '@tursodatabase/api' }],
});
