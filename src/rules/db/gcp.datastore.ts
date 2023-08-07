import { register } from '../../rules.js';

register({
  tech: 'gcp.datastore',
  dependencies: [
    { type: 'npm', name: '@google-cloud/datastore' },
    {
      type: 'terraform.resource',
      name: 'google_datastore_index',
    },
    { type: 'ruby', name: 'google-cloud-datastore' },
  ],
});
