import { register } from '../../register.js';

register({
  tech: 'turborepo',
  name: 'Turborepo',
  type: 'tool',
  files: ['turbo.json'],
  dependencies: [{ type: 'npm', name: 'turbo' }],
});
