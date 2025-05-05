import { register } from '../../register.js';

register({
  tech: 'golangcilint',
  name: 'GolangCI Lint',
  type: 'linter',
  files: ['.golangcit.yml'],
  dependencies: [
    { type: 'golang', name: 'github.com/golangci/golangci-lint' },
    { type: 'githubAction', name: 'golangci/golangci-lint-action' },
    { type: 'docker', name: 'golangci/golangci-lint' },
  ],
});
