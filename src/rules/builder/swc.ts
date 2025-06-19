import { register } from '../../register.js';

register({
  tech: 'swc',
  name: 'SWC',
  type: 'builder',
  dependencies: [{ type: 'npm', name: '@swc/core' }],
});
