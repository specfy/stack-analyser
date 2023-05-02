import { register } from '../../rules';

register({
  tech: 'kubernetes',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/kubernetes' },
  ],
});
