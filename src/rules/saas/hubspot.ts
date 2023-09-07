import { register } from '../../register.js';

register({
  tech: 'hubspot',
  name: 'HubSpot',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@hubpost\//, example: '@hubspot/api-client' },
    { type: 'php', name: 'hubspot/hubspot-php' },
    { type: 'php', name: 'hubspot/api-client' },
  ],
});
