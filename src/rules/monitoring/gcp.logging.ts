import { register } from '../../register.js';

register({
  tech: 'gcp.logging',
  name: 'Cloud Logging',
  type: 'monitoring',
  dependencies: [
    { type: 'npm', name: '@google-cloud/logging' },
    { type: 'golang', name: 'cloud.google.com/go/logging' },
    { type: 'ruby', name: 'google-cloud-logging' },
    { type: 'rust', name: 'google-cloud-logging' },
    { type: 'php', name: 'google/cloud-logging' },
    {
      type: 'terraform.resource',
      name: /^google_logging_/,
      example: 'google_logging_metric',
    },
  ],
});
