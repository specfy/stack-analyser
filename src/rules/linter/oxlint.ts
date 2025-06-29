import { register } from '../../register.js';

register({
  tech: 'oxlint',
  name: 'OxLint',
  type: 'linter',
  files: ['.oxlintrc.json'],
  dependencies: [{ type: 'npm', name: 'oxlint' }],
});
