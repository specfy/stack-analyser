import { register } from '../../register.js';

register({
  tech: 'databuddy',
  name: 'Databuddy',
  type: 'analytics',
  dotenv: ['DATABUDDY_'],
  dependencies: [{ type: 'npm', name: '@databuddy/sdk' }],
});
