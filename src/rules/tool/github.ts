import { register } from '../../rules.js';

register({
  tech: 'github',
  files: ['.github'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/integrations/github' },
  ],
});
