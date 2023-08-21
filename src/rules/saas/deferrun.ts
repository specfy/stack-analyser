import { register } from '../../register.js';

register({
  tech: 'deferrun',
  name: 'Defer.run',
  type: 'saas',
  dependencies: [{ type: 'npm', name: '@defer/client' }],
});
