import { register } from '../../register.js';

register({
  tech: 'deepsource',
  name: 'Deepsource',
  type: 'ci',
  files: ['.deepsource.toml'],
  dependencies: [{ type: 'githubAction', name: 'deepsourcelabs/test-coverage-action' }],
});
