import { register } from '../../rules.js';

register({
  tech: 'gcp.cloudrun',
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
  ],
});
