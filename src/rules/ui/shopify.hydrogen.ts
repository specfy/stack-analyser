import { register } from '../../register.js';

register({
  tech: 'shopify.hydrogen',
  name: 'Shopify Hydrogen',
  type: 'ui',
  dependencies: [{ type: 'npm', name: '@shopify/hydrogen' }],
});
