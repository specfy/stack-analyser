import { register } from '../../register.js';

register({
  tech: 'logsnag',
  name: 'LogSnag',
  type: 'analytics',
  dotenv: ['LOGSNAG_'],
  dependencies: [{ type: 'npm', name: 'logsnag' }],
});
