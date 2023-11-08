import { register } from '../../register.js';

register({
  tech: 'mailgun',
  name: 'Mailgun',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'mailgun.js' },
    { type: 'npm', name: 'nodemailer-mailgun-transport' },
    { type: 'php', name: 'mailgun/mailgun-php' },
    { type: 'ruby', name: 'mailgun-ruby' },
    { type: 'golang', name: 'github.com/mailgun/mailgun-go/v4' },
  ],
});
