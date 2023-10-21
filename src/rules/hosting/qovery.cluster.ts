import { register } from '../../register.js';

register({
  tech: 'qovery.cluster',
  name: 'Qovery Cluster',
  type: 'hosting',
  dependencies: [{ type: 'terraform.resource', name: 'qovery_cluster' }],
});
