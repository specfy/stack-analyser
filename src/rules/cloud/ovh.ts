import { register } from '../../register.js';

register({
  tech: 'ovh',
  name: 'OVH',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/ovh/ovh' },
    { type: 'npm', name: '@ovh-api/api' },
    { type: 'npm', name: '@ovhcloud/pulumi-ovh' },
    { type: 'php', name: 'ovh/ovh' },
  ],
});
