import { register } from '../../register.js';

register({
  tech: 'beehiiv',
  name: 'Beehiiv',
  type: 'notification',
  dotenv: ['BEEHIIV_'],
  dependencies: [{ type: 'npm', name: '@beehiiv/sdk' }],
});
