import { register } from '../../rules';

register({
  tech: 'vercel',
  files: ['.vercel', 'vercel.json'],
  dependencies: [{ type: 'npm', name: 'vercel' }],
});
