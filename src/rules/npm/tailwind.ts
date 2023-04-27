import { register } from '../../rules';

register({
  tech: 'tailwind',
  files: ['tailwind.config.js'],
  dependencies: [{ type: 'npm', name: 'tailwindcss' }],
});
