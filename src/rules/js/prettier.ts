import { register } from '../../rules.js';

register({
  tech: 'prettier',
  files: ['.prettierrc', '.prettierignore'],
  dependencies: [{ type: 'npm', name: 'prettier' }],
});
