import { register } from '../../register.js';

register({
  tech: 'browseruse',
  name: 'Browser Use',
  type: 'automation',
  dependencies: [{ type: 'python', name: 'browser-use' }],
});
