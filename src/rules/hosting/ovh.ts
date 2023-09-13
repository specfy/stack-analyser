import { register } from '../../register.js';

register({
  tech: 'ovh',
  name: 'OVH',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/ovh/ovh' },
    {
      type: 'npm',
      name: '@ovh-api/api',
    },
    { type: 'php', name: 'ovh/ovh' },
  ],
});
