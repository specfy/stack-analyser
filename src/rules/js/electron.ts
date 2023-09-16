import { register } from '../../register.js';

register({
  tech: 'electron',
  name: 'Electron',
  type: 'tool',
  dependencies: [{ type: 'npm', name: 'electron' }],
});
