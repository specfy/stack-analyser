import { register } from '../../rules';

register({
  tech: 'elasticstack',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/elastic/elasticstack' },
  ],
});
