import { register } from '../../register.js';

register({
  tech: 'auth0',
  name: 'Auth0',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'auth0' },
    { type: 'npm', name: /^@auth0\//, example: '@auth0/auth0-react' },
    { type: 'terraform', name: 'registry.terraform.io/auth0/auth0' },
    { type: 'rust', name: 'auth0' },
    { type: 'ruby', name: 'auth0' },
    { type: 'ruby', name: 'omniauth-auth0' },
    { type: 'php', name: 'auth0/auth0-php' },
    { type: 'php', name: 'auth0/login' },
  ],
});
