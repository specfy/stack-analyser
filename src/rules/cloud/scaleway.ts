import { register } from '../../register.js';

register({
  tech: 'scaleway',
  name: 'Scaleway',
  type: 'cloud',
  dependencies: [
    { type: 'npm', name: '@scaleway/sdk' },
    { type: 'terraform', name: 'registry.terraform.io/scaleway/scaleway' },
    { type: 'githubAction', name: 'scaleway/action-scw' },
  ],
});
