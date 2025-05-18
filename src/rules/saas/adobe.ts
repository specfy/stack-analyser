import { register } from '../../register.js';

register({
  tech: 'adobe',
  name: 'Adobe',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@adobe/pdfservices-node-sdk' },
    { type: 'php', name: 'adobe/pdfservices-php-sdk' },
  ],
});
