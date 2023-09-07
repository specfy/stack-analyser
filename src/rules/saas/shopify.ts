import { register } from '../../register.js';

register({
  tech: 'shopify',
  name: 'Shopify',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@shopify\//, example: '@shopify/shopify-api' },
    { type: 'php', name: 'shopify/shopify-api' },
    { type: 'php', name: 'phpclassic/php-shopify' },
  ],
});
