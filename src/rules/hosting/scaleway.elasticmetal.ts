import { register } from '../../register.js';

register({
  tech: 'scaleway.elasticmetal',
  name: 'Scaleway Elastic Metal',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_baremetal_server' },
  ],
});
