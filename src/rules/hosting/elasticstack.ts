import { register } from '../../register.js';

register({
  tech: 'elasticstack',
  name: 'Elasticstack',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/elastic/elasticstack' },
  ],
});
