import { register } from '../../register.js';

register({
  tech: 'pnpm',
  name: 'pnpm',
  type: 'tool',
  files: ['pnpm-lock.yaml'],
  dependencies: [{ type: 'npm', name: 'pnpm' }],
});
