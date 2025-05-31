import { register } from '../../register.js';

register({
  tech: 'woocommerce',
  name: 'WooCommerce',
  type: 'cms',
  dependencies: [
    { type: 'php', name: 'automattic/woocommerce' },
    { type: 'terraform.resource', name: 'airbyte_source_woocommerce' },
  ],
});
