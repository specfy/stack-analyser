import { register } from '../../rules';

register({
  tech: 'couchbase',
  dependencies: [
    { type: 'npm', name: 'couchbase' },
    { type: 'docker', name: /couchbase/, example: 'couchbase:0.0.0' },
  ],
});
