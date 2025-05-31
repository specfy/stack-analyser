import { register } from '../../register.js';

register({
  tech: 'pingdom',
  name: 'Pingdom',
  type: 'monitoring',
  dotenv: ['PINGDOM_'],
  dependencies: [{ type: 'terraform', name: 'registry.terraform.io/russellcardullo/pingdom' }],
});
