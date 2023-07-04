import { register } from '../../rules.js';

register({
  tech: 'gitlab',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/gitlabhq/gitlab' },
  ],
});
