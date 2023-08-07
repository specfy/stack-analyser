import { register } from '../../rules.js';

register({
  tech: 'gcp.translate',
  dependencies: [
    { type: 'npm', name: '@google-cloud/translate' },
    { type: 'terraform.resource', name: '' },
    {
      type: 'ruby',
      name: /^google-cloud-translate/,
      example: 'google-cloud-translate-v1',
    },
  ],
});
