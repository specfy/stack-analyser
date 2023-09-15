import { register } from '../../register.js';

register({
  tech: 'elasticcloud',
  name: 'Elasticcloud',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/elastic/ec' },
  ],
});
