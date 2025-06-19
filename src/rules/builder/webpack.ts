import { register } from '../../register.js';

register({
  tech: 'webpack',
  name: 'Webpack',
  type: 'builder',
  dependencies: [{ type: 'npm', name: 'webpack' }],
});
