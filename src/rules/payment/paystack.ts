import { register } from '../../register.js';

register({
  tech: 'paystack',
  name: 'Paystack',
  type: 'payment',
  dotenv: ['PAYSTACK_'],
  dependencies: [{ type: 'npm', name: /^@paystack\//, example: '@paystack/inline-js' }],
});
