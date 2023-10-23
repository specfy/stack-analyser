import { register } from '../../register.js';

register({
  tech: 'nextjs',
  name: 'Next.js',
  type: 'framework',
  files: ['next.config.js', 'next.config.mjs'],
  dependencies: [
    { type: 'npm', name: 'next' },
    { type: 'npm', name: '@netlify/plugin-nextjs' },
  ],
});
