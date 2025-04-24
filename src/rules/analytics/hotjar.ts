import { register } from '../../register.js';

register({
  tech: 'hotjar',
  name: 'Hotjar',
  type: 'analytics',
  dependencies: [{ type: 'npm', name: '@hotjar/browser' }],
});
