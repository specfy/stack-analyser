import { register } from '../../register.js';

register({
  tech: 'couchbase',
  name: 'Couchbase',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'couchbase' },
    { type: 'docker', name: /couchbase/, example: 'couchbase:0.0.0' },
    { type: 'rust', name: 'couchbase' },
    { type: 'ruby', name: 'couchbase' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/couchbasecloud/couchbasecapella',
    },
    { type: 'php', name: 'couchbase/couchbase' },
  ],
});
