import { register } from '../../rules.js';

register({
  tech: 'sqlite',
  files: ['schema.sqlite'],
  dependencies: [
    { type: 'npm', name: 'sqlite3' },
    { type: 'rust', name: 'sqlite' },
    { type: 'rust', name: 'rusqlite' },
    { type: 'rust', name: 'libsqlite3-sys' },
    { type: 'ruby', name: 'sqlite3' },
  ],
});
