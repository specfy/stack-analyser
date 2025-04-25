import { register } from '../../register.js';

register({
  tech: 'akamai',
  name: 'Akamai',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/akamai/akamai' },
    { type: 'npm', name: 'akamai-edgegrid' },
  ],
});
