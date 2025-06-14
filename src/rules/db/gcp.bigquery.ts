import { register } from '../../register.js';

register({
  tech: 'gcp.bigquery',
  name: 'Cloud BigQuery',
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
    { type: 'terraform.resource', name: 'airbyte_destination_bigquery' },
    { type: 'python', name: 'google-cloud-bigquery-logging' },
    { type: 'python', name: 'google-cloud-bigquery-datatransfer' },
  ],
});
