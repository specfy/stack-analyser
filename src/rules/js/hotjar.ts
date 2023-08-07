import { register } from '../../register.js';

register({
  tech: 'hotjar',
  name: 'Hotjar',
  type: 'tool',
  dependencies: [{ type: 'npm', name: '@hotjar/browser' }],
});
