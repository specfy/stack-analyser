import { register } from '../../register.js';

register({
  tech: 'renovate',
  name: 'Renovate',
  type: 'ci',
  files: ['.renovaterc.json', '.renovaterc', 'renovate.json', 'renovate.json5'],
  dependencies: [{ type: 'npm', name: 'renovate' }],
});
