import { register } from '../../register.js';

register({
  tech: 'vite',
  name: 'Vite',
  type: 'builder',
  dependencies: [{ type: 'npm', name: 'vite' }],
});
