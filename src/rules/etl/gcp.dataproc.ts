import { register } from '../../rules.js';

register({
  tech: 'gcp.dataproc',
  dependencies: [
    { type: 'npm', name: '@google-cloud/dataproc' },
    {
      type: 'terraform.resource',
      name: /^google_dataproc_/,
      example: 'google_dataproc_job',
    },
    {
      type: 'ruby',
      name: /^google-cloud-dataproc/,
      example: 'google-cloud-dataproc-v1',
    },
  ],
});
