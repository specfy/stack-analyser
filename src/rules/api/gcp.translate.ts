import { register } from '../../register.js';

register({
  tech: 'gcp.translate',
  name: 'Google Translate',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/translate' },
    { type: 'npm', name: 'google-translate-api-browser' },
    { type: 'npm', name: '@vitalets/google-translate-api' },
    { type: 'npm', name: '@iamtraction/google-translate' },
    {
      type: 'ruby',
      name: /^google-cloud-translate/,
      example: 'google-cloud-translate-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/translate' },
    { type: 'php', name: 'google/cloud-translate' },
  ],
});
