import { register } from '../../register.js';

register({
  tech: 'astro',
  name: 'Astro',
  type: 'framework',
  files: ['astro.config.mjs'],
  dependencies: [{ type: 'npm', name: 'astro' }],
});
