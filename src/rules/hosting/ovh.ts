import { register } from '../../rules.js';

register({
  tech: 'ovh',
  dependencies: [{ type: 'terraform', name: 'registry.terraform.io/ovh/ovh' }],
});
