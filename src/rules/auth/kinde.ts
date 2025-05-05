import { register } from '../../register.js';

register({
  tech: 'kinde',
  name: 'Kinde',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@kinde-oss\//, example: '@kinde-oss/kinde-typescript-sdk' },
    { type: 'python', name: 'kinde-python-sdk' },
    { type: 'ruby', name: 'kinde_sdk' },
    { type: 'php', name: 'kinde-oss/kinde-auth-php' },
  ],
});
