import { register } from '../../register.js';

register({
  tech: 'sveltejs',
  name: 'Svelte',
  type: 'language',
  files: ['svelte.config.js'],
  dependencies: [
    { type: 'npm', name: 'svelte' },
    {
      type: 'npm',
      name: /^@svelte\//,
      example: '@sveltejs/vite-plugin-svelte',
    },
  ],
});
