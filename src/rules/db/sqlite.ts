import { register } from '../../rules.js';

register({
  tech: 'sqlite',
  files: ['schema.sqlite'],
  dependencies: [
    { type: 'npm', name: 'sqlite3' },
    { type: 'rustcargo', name: 'sqlite' },
    { type: 'rustcargo', name: 'rusqlite' },
    { type: 'rustcargo', name: 'libsqlite3-sys' },
  ],
});
