import { register } from '../../rules.js';

register({
  tech: 'couchbase',
  dependencies: [
    { type: 'npm', name: 'couchbase' },
    { type: 'docker', name: /couchbase/, example: 'couchbase:0.0.0' },
    { type: 'rust', name: 'couchbase' },
    { type: 'ruby', name: 'couchbase' },
  ],
});
