import { register } from '../../register.js';

register({
  tech: 'flyway',
  name: 'Flyway',
  type: 'tool',
  dependencies: [
    { type: 'docker', name: 'flyway/flyway' },
    { type: 'githubAction', name: 'red-gate/flyway-hub-migration-test' },
    { type: 'githubAction', name: 'joshuaavalon/flyway-action' },
  ],
});
