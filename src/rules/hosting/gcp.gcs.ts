import { register } from '../../rules.js';

register({
  tech: 'gcp.gcs',
  dependencies: [
    { type: 'npm', name: '@google-cloud/storage' },
    { type: 'terraform.resource', name: 'google_storage_bucket' },
    { type: 'gomod', name: 'cloud.google.com/go/storage ' },
  ],
});
