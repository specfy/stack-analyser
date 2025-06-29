import { register } from '../../register.js';

register({
  tech: 'sveltejs',
  name: 'Svelte',
  type: 'ui_framework',
  files: ['svelte.config.js'],
  dependencies: [{ type: 'npm', name: 'svelte' }],
});
