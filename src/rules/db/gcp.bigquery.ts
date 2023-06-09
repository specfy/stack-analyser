import { register } from '../../rules.js';

register({
  tech: 'gcp.bigquery',
  dependencies: [
    { type: 'npm', name: '@google-cloud/bigquery' },
    {
      type: 'terraform.resource',
      name: 'google_bigquery_dataset',
    },
    {
      type: 'terraform.resource',
      name: 'google_bigquery_table',
    },
  ],
});
