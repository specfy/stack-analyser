import { register } from '../../register.js';

register({
  tech: 'orysh',
  name: 'Ory',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@ory\//, example: '@ory/client' },
    { type: 'golang', name: 'github.com/ory/client-go' },
    { type: 'php', name: 'ory/client' },
  ],
});
