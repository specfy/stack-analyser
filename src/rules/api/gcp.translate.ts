import { register } from '../../register.js';

register({
  tech: 'gcp.translate',
  name: 'Translate',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/translate' },
    { type: 'terraform.resource', name: '' },
    {
      type: 'ruby',
      name: /^google-cloud-translate/,
      example: 'google-cloud-translate-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/translate' },
  ],
});
