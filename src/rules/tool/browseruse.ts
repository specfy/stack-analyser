import { register } from '../../register.js';

register({
  tech: 'browseruse',
  name: 'Browser Use',
  type: 'tool',
  dependencies: [{ type: 'python', name: 'browser-use' }],
});
