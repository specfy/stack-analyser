import { register } from '../../rules';

register({
  tech: 'renovate',
  files: ['.renovaterc.json', '.renovaterc', 'renovate.json', 'renovate.json5'],
  dependencies: [{ type: 'npm', name: 'renovate' }],
});
