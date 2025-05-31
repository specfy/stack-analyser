import { register } from '../../register.js';

register({
  tech: 'linear',
  name: 'Linear',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@linear/sdk' },
    { type: 'python', name: 'linear-cli' },
  ],
});
