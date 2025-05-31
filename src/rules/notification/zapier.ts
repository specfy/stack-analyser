import { register } from '../../register.js';

register({
  tech: 'zapier',
  name: 'Zapier',
  type: 'notification',
  dotenv: ['ZAPIER_'],
  dependencies: [
    { type: 'npm', name: 'zapier-platform-core' },
    { type: 'npm', name: 'zapier-platform-cli' },
  ],
});
