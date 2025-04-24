import { register } from '../../register.js';

register({
  tech: 'tailwind',
  name: 'Tailwind',
  type: 'ui',
  files: ['tailwind.config.js'],
  dependencies: [{ type: 'npm', name: 'tailwindcss' }],
});
