import { register } from '../../register.js';

register({
  tech: 'nextjs',
  name: 'Next.js',
  type: 'framework',
  files: ['next.config.js'],
  dependencies: [{ type: 'npm', name: 'next' }],
});
