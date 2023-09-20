import { register } from '../../register.js';

register({
  tech: 'gcp.gcs',
  name: 'Cloud Storage',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@google-cloud/storage' },
    {
      type: 'terraform.resource',
      name: /^google_storage_/,
      example: 'google_storage_bucket',
    },
    { type: 'golang', name: 'cloud.google.com/go/storage' },
    { type: 'ruby', name: 'google-cloud-storage' },
    { type: 'rust', name: 'google-cloud-storage' },
    { type: 'php', name: 'google/cloud-storage' },
    {
      type: 'githubAction',
      name: 'google-github-actions/upload-cloud-storage',
    },
    { type: 'php', name: 'league/flysystem-google-cloud-storage' },
  ],
});
