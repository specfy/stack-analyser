import { register } from '../../register.js';

register({
  tech: 'sendgrid',
  name: 'Sendgrid',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@sendgrid\//, example: '@sendgrid/mail' },
    { type: 'php', name: 'sendgrid/sendgrid' },
  ],
});
