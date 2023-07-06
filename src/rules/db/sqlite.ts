import { register } from '../../rules.js';

register({
  tech: 'sqlite',
  files: ['schema.sqlite'],
  dependencies: [{ type: 'npm', name: 'sqlite3' }],
});
