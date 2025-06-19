import { register } from '../../register.js';

register({
  tech: 'turborepo',
  name: 'Turborepo',
  type: 'builder',
  files: ['turbo.json'],
  dependencies: [{ type: 'npm', name: 'turbo' }],
});
