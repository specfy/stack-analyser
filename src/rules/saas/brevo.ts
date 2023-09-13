import { register } from '../../register.js';

register({
  tech: 'brevo',
  name: 'Brevo',
  type: 'saas',
  dependencies: [
    { type: 'golang', name: 'github.com/getbrevo/brevo-go' },
    { type: 'npm', name: '@getbrevo/brevo' },
    { type: 'php', name: 'getbrevo/brevo-php' },
    { type: 'php', name: 'sendinblue/api-v3-sdk' },
    { type: 'ruby', name: 'sib-api-v3-sdk' },
    { type: 'npm', name: '@sendinblue/client' },
  ],
});
