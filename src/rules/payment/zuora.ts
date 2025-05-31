import { register } from '../../register.js';

register({
  tech: 'zuora',
  name: 'Zuora',
  type: 'payment',
  dotenv: ['ZUORA_'],
  dependencies: [
    { type: 'npm', name: 'zuora-sdk-js' },
    { type: 'python', name: 'zuora-sdk' },
  ],
});
