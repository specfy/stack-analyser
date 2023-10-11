import { register } from '../../register.js';

register({
  tech: 'adyen',
  name: 'Adyen',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@adyen/adyen-web' },
    { type: 'npm', name: '@adyen/api-library' },
    { type: 'npm', name: '@adyen/react-native' },
    { type: 'php', name: 'adyen/php-api-library' },
    { type: 'php', name: 'adyen/module-payment' },
    { type: 'php', name: 'adyen/php-webhook-module' },
    { type: 'ruby', name: 'adyen' },
    { type: 'ruby', name: 'adyen-ruby-api-library' },
    { type: 'ruby', name: 'adyen-cse-ruby' },
  ],
});
