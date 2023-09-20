import { register } from '../../register.js';

register({
  tech: 'paypal',
  name: 'Paypal',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@paypal/paypal-js' },
    { type: 'npm', name: 'paypal-rest-sdk' },
    { type: 'php', name: 'paypal/rest-api-sdk-php' },
    { type: 'php', name: 'srmklive/paypal' },
    { type: 'php', name: 'omnipay/paypal' },
    { type: 'ruby', name: 'paypal' },
    { type: 'ruby', name: 'paypal-sdk-rest' },
    { type: 'ruby', name: 'paypal-express' },
    { type: 'ruby', name: 'paypal-sdk-core' },
    { type: 'ruby', name: 'paypal-sdk-merchant' },
    { type: 'ruby', name: 'paypal-checkout-sdk' },
    { type: 'rust', name: 'paypal-rs' },
    { type: 'golang', name: 'github.com/markbates/goth/providers/paypal' },
  ],
});
