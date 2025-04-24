import { register } from '../../register.js';

register({
  tech: 'vitest',
  name: 'Vitest',
  type: 'test',
  files: ['vitest.config.js', 'vitest.config.ts'],
  dependencies: [{ type: 'npm', name: 'vitest' }],
});
