import { register } from '../../rules.js';

register({
  tech: 'eslint',
  files: ['.eslintrc', '.eslintrc.cjs', '.eslintrc.json', '.eslintrc.js'],
  dependencies: [{ type: 'npm', name: 'eslint' }],
});
