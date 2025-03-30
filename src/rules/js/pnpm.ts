import { register } from '../../register.js';

register({
  tech: 'pnpm',
  name: 'pnPM',
  type: 'tool',
  files: ['pnpm-lock.yaml'],
  dependencies: [{ type: 'npm', name: 'pnpm' }],
});
