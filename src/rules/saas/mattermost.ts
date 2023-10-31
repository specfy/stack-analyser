import { register } from '../../register.js';

register({
  tech: 'mattermost',
  name: 'Mattermost',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'mattermost-client' },
    { type: 'npm', name: '@mattermost/client' },
    { type: 'npm', name: 'hubot-matteruser' },
  ],
});
