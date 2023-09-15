import { register } from '../../register.js';

register({
  tech: 'postmark',
  name: 'Postmark',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'postmark' },
    { type: 'npm', name: 'postman-cli' },
    { type: 'ruby', name: 'postmark-rails' },
    { type: 'ruby', name: 'postmark' },
    { type: 'php', name: 'wildbit/postmark-php' },
  ],
});
