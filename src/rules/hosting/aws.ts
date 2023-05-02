import { register } from '../../rules';

register({
  tech: 'aws',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/aws' },
  ],
});
