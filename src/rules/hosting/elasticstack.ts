import { register } from '../../rules.js';

register({
  tech: 'elasticstack',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/elastic/elasticstack' },
  ],
});
