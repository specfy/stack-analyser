import { register } from '../../rules.js';

register({
  tech: 'aws',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/aws' },
  ],
});
