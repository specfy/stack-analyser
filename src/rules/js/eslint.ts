import { register } from '../../register.js';

register({
  tech: 'eslint',
  name: 'Eslint',
  type: 'tool',
  files: ['.eslintrc', '.eslintrc.cjs', '.eslintrc.json', '.eslintrc.js'],
  dependencies: [{ type: 'npm', name: 'eslint' }],
});
