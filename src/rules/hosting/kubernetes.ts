import { register } from '../../rules.js';

register({
  tech: 'kubernetes',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/kubernetes' },
  ],
});
