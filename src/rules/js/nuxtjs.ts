import { register } from '../../register.js';

register({
  tech: 'nuxtjs',
  name: 'Nuxt.js',
  type: 'framework',
  files: ['nuxt.config.js'],
  dependencies: [
    { type: 'npm', name: 'nuxt' },
    { type: 'npm', name: 'nuxt-edge' },
    { type: 'npm', name: 'nuxt3' },
  ],
});
