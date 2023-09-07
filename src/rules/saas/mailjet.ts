import { register } from '../../register.js';

register({
  tech: 'mailjet',
  name: 'Mailjet',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'node-mailjet' },
    { type: 'rust', name: 'mailjet-rs' },
    { type: 'ruby', name: 'mailjet' },
    { type: 'php', name: 'mailjet/mailjet-apiv3-php' },
    { type: 'php', name: 'mailjet/laravel-mailjet' },
  ],
});
