import { register } from '../../register.js';

register({
  tech: 'shopify',
  name: 'Shopify',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@shopify/shopify-api' },
    { type: 'npm', name: '@shopify/cli' },
    { type: 'npm', name: 'shopify-api-node' },
    { type: 'php', name: 'shopify/shopify-api' },
    { type: 'php', name: 'phpclassic/php-shopify' },
    { type: 'ruby', name: 'shopify_api' },
    { type: 'ruby', name: 'shopify_app' },
    { type: 'ruby', name: 'shopify-cli' },
  ],
});
