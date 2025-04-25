import { register } from '../../register.js';

register({
  tech: 'betterauth',
  name: 'Betterauth',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: 'better-auth' },
    { type: 'npm', name: '@better-auth/cli' },
  ],
});
