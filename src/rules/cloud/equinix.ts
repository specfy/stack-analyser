import { register } from '../../register.js';

register({
  tech: 'equinix',
  name: 'Equinix',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/equinix/equinix' },
    { type: 'terraform', name: 'registry.terraform.io/equinix/metal' },
  ],
});
