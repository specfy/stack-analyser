import { register } from '../../register.js';

register({
  tech: 'gcp.secretmanager',
  name: 'Secret Manager',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/secret-manager' },
    {
      type: 'terraform.resource',
      name: 'google_secret_manager_secret',
    },
    {
      type: 'ruby',
      name: /^google-cloud-secret_manager/,
      example: 'google-cloud-secret_manager-v1',
    },
  ],
});
