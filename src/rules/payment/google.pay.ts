import { register } from '../../register.js';

register({
  tech: 'google.pay',
  name: 'Google Pay',
  type: 'payment',
  dotenv: ['GOOGLE_PAY_', 'GPAY_'],
  dependencies: [{ type: 'npm', name: '@types/googlepay' }],
});
