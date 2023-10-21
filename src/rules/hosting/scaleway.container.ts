import { register } from '../../register.js';

register({
  tech: 'scaleway.container',
  name: 'Scaleway Container',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_container' },
    { type: 'terraform.resource', name: 'scaleway_container_cron' },
  ],
});
