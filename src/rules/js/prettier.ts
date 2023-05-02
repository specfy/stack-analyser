import { register } from '../../rules';

register({
  tech: 'prettier',
  files: ['.prettierrc', '.prettierignore'],
  dependencies: [{ type: 'npm', name: 'prettier' }],
});
