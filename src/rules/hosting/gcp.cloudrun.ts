import { register } from '../../register.js';

register({
  tech: 'gcp.cloudrun',
  name: 'Google Cloud Run',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@google-cloud/run' },
    {
      type: 'terraform.resource',
      name: 'google_cloud_run_v2_service',
    },
    {
      type: 'terraform.resource',
      name: 'google_cloud_run_v2_job',
    },
    {
      type: 'ruby',
      name: /^google-cloud-run-v/,
      example: 'google-cloud-run-v1',
    },
    {
      type: 'ruby',
      name: /^google-cloud-run_v/,
      example: 'google-cloud-run_v2',
    },
    { type: 'golang', name: 'cloud.google.com/go/run' },
    { type: 'php', name: 'google/cloud-run' },
  ],
});
