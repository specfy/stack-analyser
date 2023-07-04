import { register } from '../../rules.js';

register({
  tech: 'scaleway',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/scaleway/scaleway' },
  ],
});
