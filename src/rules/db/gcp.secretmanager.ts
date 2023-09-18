import { register } from '../../register.js';

register({
  tech: 'gcp.secretmanager',
  name: 'Cloud Secret Manager',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/secret-manager' },
    {
      type: 'terraform.resource',
      name: /^google_secret_manager/,
      example: 'google_secret_manager_secret',
    },
    {
      type: 'ruby',
      name: /^google-cloud-secret_manager/,
      example: 'google-cloud-secret_manager-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/secretmanager' },
    { type: 'php', name: 'google/cloud-secret-manager' },
    {
      type: 'githubAction',
      name: 'google-github-actions/get-secretmanager-secrets',
    },
  ],
});
