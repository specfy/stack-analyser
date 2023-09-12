import { register } from '../../register.js';

register({
  tech: 'vercel',
  name: 'Vercel',
  type: 'hosting',
  files: ['.vercel', 'vercel.json'],
  dependencies: [
    { type: 'npm', name: 'vercel' },
    { type: 'npm', name: /^@vercel\//, example: '@vercel/ai' },
    { type: 'terraform', name: 'registry.terraform.io/vercel/vercel' },
    { type: 'rust', name: /^vercel_/, example: 'vercel_runtime' },
    { type: 'githubAction', name: 'snaplet/vercel-action' },
  ],
});
