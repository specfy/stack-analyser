import { register } from '../../register.js';

register({
  tech: 'gcp.bigtable',
  name: 'Cloud BigTable',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/bigtable' },
    {
      type: 'terraform.resource',
      name: /^google_bigtable_/,
      example: 'google_bigtable_instance',
    },
    { type: 'ruby', name: 'google-cloud-bigtable' },
    { type: 'golang', name: 'cloud.google.com/go/bigtable' },
    { type: 'php', name: 'google/cloud-bigtable' },
  ],
});
