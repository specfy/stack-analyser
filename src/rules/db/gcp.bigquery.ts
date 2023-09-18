import { register } from '../../register.js';

register({
  tech: 'gcp.bigquery',
  name: 'Google BigQuery',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/bigquery' },
    {
      type: 'terraform.resource',
      name: /^google_bigquery_/,
      example: 'google_bigquery_dataset',
    },
    { type: 'rust', name: 'gcp-bigquery-client' },
    { type: 'ruby', name: 'google-cloud-bigquery' },
    { type: 'golang', name: 'cloud.google.com/go/bigquery' },
    { type: 'php', name: 'google/cloud-bigquery' },
  ],
});
