import { register } from '../../register.js';

register({
  tech: 'gcp.language',
  name: 'Language',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/language' },
    {
      type: 'ruby',
      name: /^google-cloud-language/,
      example: 'google-cloud-language-v1',
    },
  ],
});
