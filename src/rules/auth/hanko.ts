import { register } from '../../register.js';

register({
  tech: 'hanko',
  name: 'Hanko',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@teamhanko\//, example: '@teamhanko/hanko-frontend-sdk' },
    { type: 'npm', name: '@nuxtjs/hanko' },
  ],
});
