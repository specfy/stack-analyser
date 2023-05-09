import { register } from '../../rules.js';

register({
  tech: 'browserstack',
  files: ['browserstack.json'],
  dependencies: [{ type: 'npm', name: 'browserstack' }],
});
