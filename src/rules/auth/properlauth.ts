import { register } from '../../register.js';

register({
  tech: 'propelauth',
  name: 'PropelAuth',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@propelauth\//, example: '@propelauth/node' },
    { type: 'python', name: 'propelauth_fastapi' },
    { type: 'rust', name: 'propelauth' },
    { type: 'golang', name: 'github.com/propelauth/propelauth-go' },
  ],
});
