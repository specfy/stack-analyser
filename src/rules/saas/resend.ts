import { register } from '../../register.js';

register({
  tech: 'resend',
  name: 'Resend',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'resend' },
    { type: 'php', name: 'resend/resend-php' },
  ],
});
