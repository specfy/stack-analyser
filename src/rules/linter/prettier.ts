import { register } from '../../register.js';

register({
  tech: 'prettier',
  name: 'Prettier',
  type: 'linter',
  files: ['.prettierrc', '.prettierignore'],
  dependencies: [{ type: 'npm', name: 'prettier' }],
});
