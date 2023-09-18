import { register } from '../../register.js';

register({
  tech: 'gcp.language',
  name: 'Cloud Language',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/language' },
    {
      type: 'ruby',
      name: /^google-cloud-language/,
      example: 'google-cloud-language-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/language' },
    { type: 'php', name: 'google/cloud-language' },
  ],
});
