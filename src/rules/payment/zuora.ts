import { register } from '../../register.js';

register({
  tech: 'zuora',
  name: 'Zuora',
  type: 'payment',
  dependencies: [
    { type: 'npm', name: 'zuora-sdk-js' },
    { type: 'python', name: 'zuora-sdk' },
  ],
});
