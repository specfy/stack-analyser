import { register } from '../../register.js';

register({
  tech: 'codecov',
  name: 'Codecov',
  type: 'ci',
  files: ['.codecov.yml', 'codecov.yml'],
  dependencies: [{ type: 'githubAction', name: 'codecov/codecov-action' }],
});
