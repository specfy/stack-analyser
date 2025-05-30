import { register } from '../../register.js';

register({
  tech: 'zendesk',
  name: 'Zendesk',
  type: 'communication',
  dotenv: ['ZENDESK_'],
  dependencies: [
    { type: 'npm', name: 'node-zendesk' },
    { type: 'ruby', name: 'zendesk_api' },
    { type: 'php', name: 'zendesk/zendesk_api_client_php' },
  ],
});
