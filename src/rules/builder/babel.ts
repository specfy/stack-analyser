import { register } from '../../register.js';

register({
  tech: 'babel',
  name: 'Babel',
  type: 'builder',
  dependencies: [{ type: 'npm', name: '@babel/core' }],
});
