import { register } from '../../register.js';

register({
  tech: 'zapier',
  name: 'Zapier',
  type: 'notification',
  dependencies: [
    { type: 'npm', name: 'zapier-platform-core' },
    { type: 'npm', name: 'zapier-platform-cli' },
  ],
});
