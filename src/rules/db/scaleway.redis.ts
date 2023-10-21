import { register } from '../../register.js';

register({
  tech: 'scaleway.redis',
  name: 'Scaleway Redis',
  type: 'db',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_redis_cluster' },
  ],
});
