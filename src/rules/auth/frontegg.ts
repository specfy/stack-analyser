import { register } from '../../register.js';

register({
  tech: 'frontegg',
  name: 'Frontegg',
  type: 'auth',
  dependencies: [
    { type: 'npm', name: /^@frontegg\//, example: '@frontegg/js' },
    { type: 'python', name: 'frontegg' },
    { type: 'terraform', name: 'registry.terraform.io/frontegg/frontegg' },
  ],
});
