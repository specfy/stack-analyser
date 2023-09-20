import { register } from '../../register.js';

register({
  tech: 'mailhog',
  name: 'Mailhog',
  type: 'tool',
  dependencies: [
    { type: 'golang', name: 'github.com/mailhog/MailHog' },
    { type: 'docker', name: 'mailhog/mailhog' },
  ],
});
