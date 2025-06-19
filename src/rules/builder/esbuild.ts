import { register } from '../../register.js';

register({
  tech: 'esbuild',
  name: 'Esbuild',
  type: 'builder',
  dependencies: [{ type: 'npm', name: 'esbuild' }],
});
