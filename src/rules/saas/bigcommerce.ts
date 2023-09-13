import { register } from '../../register.js';

register({
  tech: 'bigcommerce',
  name: 'BigCommerce',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'bigcommerce/api' }],
});
