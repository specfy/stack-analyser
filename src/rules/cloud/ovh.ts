import { register } from '../../register.js';

register({
  tech: 'ovh',
  name: 'OVH',
  type: 'cloud',
  dotenv: ['OVH_'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/ovh/ovh' },
    { type: 'npm', name: '@ovh-api/api' },
    { type: 'npm', name: '@ovhcloud/pulumi-ovh' },
    { type: 'php', name: 'ovh/ovh' },
  ],
});
