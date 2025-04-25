import { register } from '../../register.js';

register({
  tech: 'hostinger',
  name: 'Hostinger',
  type: 'cloud',
  dependencies: [
    { type: 'php', name: 'hostinger/api-php-sdk' },
    { type: 'python', name: 'hostinger_api' },
    { type: 'npm', name: 'hostinger-api-sdk' },
  ],
});
