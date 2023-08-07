import { register } from '../../rules.js';

register({
  tech: 'gcp.bigtable',
  dependencies: [
    { type: 'npm', name: '@google-cloud/bigtable' },
    {
      type: 'terraform.resource',
      name: 'google_bigtable_instance',
    },
    {
      type: 'terraform.resource',
      name: 'google_bigtable_table',
    },
    { type: 'ruby', name: 'google-cloud-bigtable' },
  ],
});
