import { register } from '../../register.js';

register({
  tech: 'stripe',
  name: 'Stripe',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'stripe' },
    { type: 'php', name: 'stripe/stripe-php' },
    { type: 'php', name: 'laravel/cashier' },
    { type: 'php', name: 'omnipay/stripe' },
    { type: 'php', name: 'cartalyst/stripe' },
  ],
});
