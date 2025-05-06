import { register } from '../../register.js';

register({
  tech: 'integrationapp',
  name: 'Integration.app',
  type: 'etl',
  dependencies: [{ type: 'npm', name: /^@integration-app\//, example: '@integration-app/sdk' }],
});
