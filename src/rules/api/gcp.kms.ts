import { register } from '../../register.js';

register({
  tech: 'gcp.kms',
  name: 'Cloud Key Management',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/kms' },
    {
      type: 'terraform.resource',
      name: /^google_kms_/,
      example: 'google_kms_crypto_key',
    },
    {
      type: 'ruby',
      name: /^google-cloud-kms/,
      example: 'google-cloud-kms-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/kms' },
    { type: 'php', name: 'google/cloud-kms' },
  ],
});
