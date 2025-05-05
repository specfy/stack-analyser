import { register } from '../../register.js';

register({
  tech: 'depotdev',
  name: 'Depot.dev',
  type: 'ci',
  files: ['depot.json'],
  dependencies: [
    { type: 'githubAction', name: 'depot/setup-action' },
    { type: 'githubAction', name: 'depot/build-push-action' },
  ],
});
