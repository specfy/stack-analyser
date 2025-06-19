import { register } from '../../register.js';

register({
  tech: 'zod',
  name: 'Zod',
  type: 'validation',
  dependencies: [{ type: 'npm', name: 'zod' }],
});
