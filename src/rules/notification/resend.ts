import { register } from '../../register.js';

register({
  tech: 'resend',
  name: 'Resend',
  type: 'notification',
  dotenv: ['RESEND_'],
  dependencies: [
    { type: 'npm', name: 'resend' },
    { type: 'php', name: 'resend/resend-php' },
    { type: 'php', name: 'resend/resend-laravel' },
    { type: 'python', name: 'resend' },
    { type: 'ruby', name: 'resend' },
    { type: 'golang', name: 'github.com/resend/resend-go/v2' },
    { type: 'rust', name: 'resend-rs' },
  ],
});
