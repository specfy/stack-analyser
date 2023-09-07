import { register } from '../../register.js';

register({
  tech: 'gitlab',
  name: 'Gitlab',
  type: 'tool',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/gitlabhq/gitlab' },
    { type: 'rust', name: 'gitlab' },
    { type: 'ruby', name: 'gitlab' },
    { type: 'php', name: 'm4tthumphrey/php-gitlab-api' },
  ],
});
