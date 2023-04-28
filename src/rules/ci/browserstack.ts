import { register } from '../../rules';

register({
  tech: 'browserstack',
  files: ['browserstack.json'],
  dependencies: [{ type: 'npm', name: 'browserstack' }],
});
