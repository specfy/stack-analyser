import { register } from '../../register.js';

register({
  tech: 'rollup',
  name: 'Rollup',
  type: 'tool',
  dependencies: [{ type: 'npm', name: 'rollup' }],
});
