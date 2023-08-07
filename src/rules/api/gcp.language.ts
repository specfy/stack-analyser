import { register } from '../../rules.js';

register({
  tech: 'gcp.language',
  dependencies: [
    { type: 'npm', name: '@google-cloud/language' },
    {
      type: 'ruby',
      name: /^google-cloud-language/,
      example: 'google-cloud-language-v1',
    },
  ],
});
