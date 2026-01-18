import { register } from '../../register.js';

register({
  tech: 'betterauth',
  name: 'Better Auth',
  type: 'auth',
  dotenv: ['BETTER_AUTH_'],
  dependencies: [
    { type: 'npm', name: 'better-auth' },
    { type: 'npm', name: '@better-auth/cli' },
  ],
});
