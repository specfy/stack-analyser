import { register } from '../../register.js';

register({
  tech: 'vercel',
  name: 'Vercel',
  type: 'cloud',
  files: ['.vercel', 'vercel.json'],
  dependencies: [
    { type: 'npm', name: 'vercel' },
    { type: 'npm', name: '@vercel/client' },
    { type: 'terraform', name: 'registry.terraform.io/vercel/vercel' },
    { type: 'rust', name: /^vercel_/, example: 'vercel_runtime' },
    { type: 'githubAction', name: 'snaplet/vercel-action' },
    { type: 'githubAction', name: 'amondnet/vercel-action' },
  ],
});
