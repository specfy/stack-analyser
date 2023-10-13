import { register } from '../../register.js';

register({
  tech: 'woocommerce',
  name: 'WooCommerce',
  type: 'framework',
  dependencies: [{ type: 'php', name: 'automattic/woocommerce' }],
});
