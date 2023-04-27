import { register } from '../../rules';

register({
  tech: 'couchbase',
  dependencies: [
    { type: 'npm', name: 'couchbase' },
    { type: 'docker', name: /couchbase/ },
  ],
});
