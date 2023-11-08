import { register } from '../../register.js';

register({
  tech: 'sendgrid',
  name: 'Sendgrid',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@sendgrid\//, example: '@sendgrid/mail' },
    { type: 'npm', name: 'nodemailer-sendgrid' },
    { type: 'npm', name: 'nodemailer-sendgrid-transport' },
    { type: 'php', name: 'sendgrid/sendgrid' },
    { type: 'ruby', name: 'sendgrid-ruby' },
    { type: 'ruby', name: 'sendgrid-rails' },
    { type: 'ruby', name: 'sendgrid' },
    { type: 'golang', name: 'github.com/sendgrid/sendgrid-go' },
  ],
});
