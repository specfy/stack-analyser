import { register } from '../../register.js';

register({
  tech: 'qovery.database',
  name: 'Qovery Database',
  type: 'db',
  dependencies: [{ type: 'terraform.resource', name: 'qovery_database' }],
});
