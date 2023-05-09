import { register } from '../../rules.js';

register({
  tech: 'gcp',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/google' },
  ],
});
