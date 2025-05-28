import { register } from '../../register.js';

register({
  tech: 'reddit',
  name: 'Reddit',
  type: 'communication',
  dependencies: [{ type: 'npm', name: 'snoowrap' }],
});
