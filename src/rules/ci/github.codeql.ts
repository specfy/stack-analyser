import { register } from '../../register.js';

register({
  tech: 'github.codeql',
  name: 'GitHub CodeQL',
  type: 'ci',
  dependencies: [{ type: 'githubAction', name: 'github/codeql-action/analyze' }],
});
