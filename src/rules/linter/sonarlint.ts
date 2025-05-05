import { register } from '../../register.js';

register({
  tech: 'sonarlint',
  name: 'SonarLint',
  type: 'linter',
  files: ['.sonarlint'],
  dependencies: [],
});
