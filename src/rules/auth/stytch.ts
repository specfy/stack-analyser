import { register } from '../../register.js';

register({
  tech: 'stytch',
  name: 'Stytch',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@stytch\//, example: '@stytch/vanilla-js' },
    { type: 'npm', name: 'stytch' },
    { type: 'python', name: 'stytch' },
    { type: 'golang', name: 'github.com/stytchauth/stytch-go/v16' },
    { type: 'ruby', name: 'stytch' },
  ],
});
