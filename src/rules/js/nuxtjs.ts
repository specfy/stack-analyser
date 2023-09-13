import { register } from '../../register.js';

register({
  tech: 'nuxtjs',
  name: 'Nuxt.js',
  type: 'tool',
  files: ['nuxt.config.js'],
  dependencies: [{ type: 'npm', name: 'nuxt' }],
});
