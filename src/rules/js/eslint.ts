import { register } from '../../register.js';

register({
  tech: 'eslint',
  name: 'Eslint',
  type: 'tool',
  files: [
    '.eslintrc',
    '.eslintrc.cjs',
    '.eslintrc.json',
    '.eslintrc.js',
    'eslint.config.js',
    'eslint.config.cjs',
    'eslint.config.mjs',
  ],
  dependencies: [{ type: 'npm', name: 'eslint' }],
});
