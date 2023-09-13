import { register } from '../../register.js';

register({
  tech: 'nextjs',
  name: 'Next.js',
  type: 'tool',
  files: ['next.config.js'],
  dependencies: [{ type: 'npm', name: 'next' }],
});
