import { register } from '../../register.js';

register({
  tech: 'replit.database',
  name: 'Replit Database',
  type: 'db',
  dependencies: [{ type: 'npm', name: '@replit/database' }],
});
