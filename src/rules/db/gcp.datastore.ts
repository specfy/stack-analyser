import { register } from '../../register.js';

register({
  tech: 'gcp.datastore',
  name: 'Google Datastore',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/datastore' },
    {
      type: 'terraform.resource',
      name: 'google_datastore_index',
    },
    { type: 'ruby', name: 'google-cloud-datastore' },
    { type: 'golang', name: 'cloud.google.com/go/datastore' },
  ],
});
