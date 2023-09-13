import { register } from '../../register.js';

register({
  tech: 'hotjar',
  name: 'Hotjar',
  type: 'saas',
  dependencies: [{ type: 'npm', name: '@hotjar/browser' }],
});
