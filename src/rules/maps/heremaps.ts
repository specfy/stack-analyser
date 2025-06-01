import { register } from '../../register.js';

register({
  tech: 'heremaps',
  name: 'HERE Maps',
  type: 'maps',
  dotenv: ['HERE_MAPS_'],
  dependencies: [{ type: 'npm', name: '@types/heremaps' }],
});
