import { register } from '../../register.js';

register({
  tech: 'logsnag',
  name: 'LogSnag',
  type: 'analytics',
  dependencies: [{ type: 'npm', name: 'logsnag' }],
});
