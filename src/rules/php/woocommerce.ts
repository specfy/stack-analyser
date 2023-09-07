import { register } from '../../register.js';

register({
  tech: 'woocommerce',
  name: 'WooCommerce',
  type: 'tool',
  dependencies: [{ type: 'php', name: 'automattic/woocommerce' }],
});
