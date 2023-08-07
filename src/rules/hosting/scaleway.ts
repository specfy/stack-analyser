import { register } from '../../rules.js';

register({
  tech: 'scaleway',
  dependencies: [
    { type: 'npm', name: '@scaleway/sdk' },
    { type: 'terraform', name: 'registry.terraform.io/scaleway/scaleway' },
  ],
});
