import { register } from '../../register.js';

register({
  tech: 'scaleway.database',
  name: 'Scaleway Database',
  type: 'db',
  dependencies: [{ type: 'terraform.resource', name: 'scaleway_rdb_instance' }],
});
