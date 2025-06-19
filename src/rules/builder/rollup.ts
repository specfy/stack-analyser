import { register } from '../../register.js';

register({
  tech: 'rollup',
  name: 'Rollup',
  type: 'builder',
  dependencies: [{ type: 'npm', name: 'rollup' }],
});
