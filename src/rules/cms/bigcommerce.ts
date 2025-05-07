import { register } from '../../register.js';

register({
  tech: 'bigcommerce',
  name: 'BigCommerce',
  type: 'cms',
  dependencies: [
    { type: 'php', name: 'bigcommerce/api' },
    { type: 'npm', name: '@bigcommerce/checkout-sdk' },
  ],
});
