import { register } from '../../rules.js';

register({
  tech: 'vercel',
  files: ['.vercel', 'vercel.json'],
  dependencies: [
    { type: 'npm', name: 'vercel' },
    { type: 'terraform', name: 'registry.terraform.io/vercel/vercel' },
  ],
});
