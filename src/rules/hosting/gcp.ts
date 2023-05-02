import { register } from '../../rules';

register({
  tech: 'gcp',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/google' },
  ],
});
