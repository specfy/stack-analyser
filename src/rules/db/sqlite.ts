import { register } from '../../register.js';

register({
  tech: 'sqlite',
  name: 'SQLite',
  type: 'db',
  files: ['schema.sqlite'],
  dependencies: [
    { type: 'npm', name: 'sqlite' },
    { type: 'npm', name: 'better-sqlite3' },
    { type: 'npm', name: 'sqlite3' },
    { type: 'rust', name: 'sqlite' },
    { type: 'rust', name: 'rusqlite' },
    { type: 'rust', name: 'libsqlite3-sys' },
    { type: 'ruby', name: 'sqlite3' },
    {
      type: 'deno',
      name: /\/x\/sqlite3@/,
      example: 'https://deno.land/x/sqlite3@1.3.5/lib/shim.ts',
    },
  ],
});
