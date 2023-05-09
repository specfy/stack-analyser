import { register } from '../../rules.js';

register({
  tech: 'tailwind',
  files: ['tailwind.config.js'],
  dependencies: [{ type: 'npm', name: 'tailwindcss' }],
});
