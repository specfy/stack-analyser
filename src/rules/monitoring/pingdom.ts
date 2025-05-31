import { register } from '../../register.js';

register({
  tech: 'pingdom',
  name: 'Pingdom',
  type: 'monitoring',
  dependencies: [{ type: 'terraform', name: 'registry.terraform.io/russellcardullo/pingdom' }],
});
