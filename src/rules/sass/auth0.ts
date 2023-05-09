import { register } from '../../rules.js';

register({
  tech: 'auth0',
  dependencies: [
    { type: 'npm', name: 'auth0' },
    { type: 'npm', name: /@auth0\//, example: '@auth0/auth0-react' },
    { type: 'terraform', name: 'registry.terraform.io/auth0/auth0' },
  ],
});
