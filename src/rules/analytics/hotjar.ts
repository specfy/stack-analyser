import { register } from '../../register.js';

register({
  tech: 'hotjar',
  name: 'Hotjar',
  type: 'analytics',
  dotenv: ['HOTJAR_'],
  dependencies: [{ type: 'npm', name: '@hotjar/browser' }],
});
