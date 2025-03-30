import { register } from '../../register.js';

register({
  tech: 'libsql',
  name: 'libSQL',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@libsql/client' },
    { type: 'golang', name: 'github.com/tursodatabase/go-libsql' },
    { type: 'golang', name: 'github.com/tursodatabase/libsql-client-go/libsql' },
    { type: 'python', name: 'libsql-experimental' },
    { type: 'rust', name: 'libsql' },
    { type: 'php', name: 'turso/libsql' },
    { type: 'ruby', name: 'turso_libsql' },
    { type: 'ruby', name: 'libsql_activerecord' },
  ],
});
