import { register } from '../../register.js';

register({
  tech: 'rethinkdb',
  name: 'RethinkDB',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'rethinkdb' },
    { type: 'npm', name: 'rethinkdb' },
    { type: 'php', name: 'danielmewes/php-rql' },
    { type: 'ruby', name: 'rethinkdb' },
    { type: 'golang', name: 'github.com/rethinkdb/rethinkdb-go' },
  ],
});
