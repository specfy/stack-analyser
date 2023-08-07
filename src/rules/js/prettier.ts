import { register } from '../../register.js';

register({
  tech: 'prettier',
  name: 'Prettier',
  type: 'tool',
  files: ['.prettierrc', '.prettierignore'],
  dependencies: [{ type: 'npm', name: 'prettier' }],
});
