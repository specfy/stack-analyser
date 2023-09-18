import { register } from '../../register.js';

register({
  tech: 'gcp.dataproc',
  name: 'Cloud Dataproc',
  type: 'etl',
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
    { type: 'golang', name: 'cloud.google.com/go/dataproc' },
    { type: 'php', name: 'google/cloud-dataproc' },
  ],
});
