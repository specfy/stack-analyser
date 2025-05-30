import { register } from '../../register.js';

register({
  tech: 'browserstack',
  name: 'Browserstack',
  type: 'ci',
  files: ['browserstack.json', 'browserstack.yml'],
  dependencies: [
    { type: 'npm', name: 'browserstack' },
    { type: 'ruby', name: 'browserstack-local' },
  ],
});
