import { register } from '../../register.js';

register({
  tech: 'apache_couchdb',
  name: 'Apache CouchDB',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'apache/couchdb' },
    { type: 'php', name: 'doctrine/couchdb' },
  ],
});
