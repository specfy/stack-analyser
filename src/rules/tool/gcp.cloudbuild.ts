import { register } from '../../rules.js';

register({
  tech: 'gcp.cloudbuild',
  dependencies: [
    { type: 'npm', name: '@google-cloud/cloudbuild' },
    { type: 'terraform.resource', name: 'google_cloudbuild_trigger' },
    {
      type: 'ruby',
      name: /^google-cloud-build/,
      example: 'google-cloud-build-v1',
    },
  ],
});
