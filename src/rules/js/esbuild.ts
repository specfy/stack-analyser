import { register } from '../../register.js';

register({
  tech: 'esbuild',
  name: 'Esbuild',
  type: 'tool',
  dependencies: [{ type: 'npm', name: 'esbuild' }],
});
