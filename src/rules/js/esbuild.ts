import { register } from '../../rules';

register({
  tech: 'esbuild',
  dependencies: [{ type: 'npm', name: 'esbuild' }],
});
