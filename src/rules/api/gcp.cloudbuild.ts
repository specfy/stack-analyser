import { register } from '../../register.js';

register({
  tech: 'gcp.cloudbuild',
  name: 'Cloud Build',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/cloudbuild' },
    {
      type: 'terraform.resource',
      name: /^google_cloudbuild_/,
      example: 'google_cloudbuild_trigger',
    },
    {
      type: 'ruby',
      name: /^google-cloud-build/,
      example: 'google-cloud-build-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/cloudbuild' },
    { type: 'php', name: 'google/cloud-build' },
  ],
});
