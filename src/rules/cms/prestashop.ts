import { register } from '../../register.js';

register({
  tech: 'prestashop',
  name: 'Prestashop',
  type: 'cms',
  dependencies: [
    { type: 'php', name: 'prestashop/ps_facetedsearch' },
    { type: 'php', name: 'prestashop/ps_shoppingcart' },
    { type: 'php', name: 'prestashop/ps_currencyselector' },
  ],
});
