import { register } from '../../rules.js';

register({
  tech: 'equinix',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/equinix/equinix' },
    { type: 'terraform', name: 'registry.terraform.io/equinix/metal' },
  ],
});
