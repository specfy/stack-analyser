import { register } from '../../rules.js';

register({
  tech: 'renovate',
  files: ['.renovaterc.json', '.renovaterc', 'renovate.json', 'renovate.json5'],
  dependencies: [{ type: 'npm', name: 'renovate' }],
});
