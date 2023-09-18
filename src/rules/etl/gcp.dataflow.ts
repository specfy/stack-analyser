import { register } from '../../register.js';

register({
  tech: 'gcp.dataflow',
  name: 'Cloud Dataflow',
  type: 'etl',
  dependencies: [
    { type: 'npm', name: '@google-cloud/dataflow' },
    {
      type: 'terraform.resource',
      name: /^google_dataflow_/,
      example: 'google_dataflow_job',
    },
    {
      type: 'ruby',
      name: /^google-cloud-dataflow/,
      example: 'google-cloud-dataflow-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/dataflow' },
    { type: 'php', name: 'google/cloud-dataflow' },
  ],
});
