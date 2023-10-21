import { register } from '../../register.js';

register({
  tech: 'scaleway.secretmanager',
  name: 'Scaleway Secret Manager',
  type: 'db',
  dependencies: [{ type: 'terraform.resource', name: 'scaleway_secret' }],
});
