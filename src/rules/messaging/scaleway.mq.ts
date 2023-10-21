import { register } from '../../register.js';

register({
  tech: 'scaleway.mq',
  name: 'Scaleway M&Q',
  type: 'messaging',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_mnq_namespace' },
    { type: 'terraform.resource', name: 'scaleway_mnq_queue' },
  ],
});
