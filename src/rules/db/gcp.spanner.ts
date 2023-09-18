import { register } from '../../register.js';

register({
  tech: 'gcp.spanner',
  name: 'Cloud Spanner',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/spanner' },
    {
      type: 'terraform.resource',
      name: /^google_spanner_/,
      example: 'google_spanner_database',
    },
    {
      type: 'ruby',
      name: /^google-cloud-spanner/,
      example: 'google-cloud-spanner-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/spanner' },
    { type: 'php', name: 'google/cloud-spanner' },
  ],
});
