import { register } from '../../register.js';

register({
  tech: 'freshdesk',
  name: 'Freshdesk',
  type: 'communication',
  dependencies: [
    { type: 'npm', name: 'freshdesk-api' },
    { type: 'npm', name: 'freshdesk' },
    { type: 'python', name: 'freshdesk' },
    { type: 'ruby', name: 'freshdesk_api' },
    { type: 'php', name: 'freshdesk/freshdesk-php' },
    { type: 'golang', name: 'github.com/freshdesk/freshdesk-go' },
  ],
});
