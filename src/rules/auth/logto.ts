import { register } from '../../register.js';

register({
  tech: 'logtoio',
  name: 'Logto',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@logto\//, example: '@logto/js' },
    { type: 'golang', name: 'github.com/logto-io/go' },
    { type: 'php', name: 'logto/sdk' },
    { type: 'python', name: 'logto' },
    { type: 'ruby', name: 'logto' },
  ],
});
