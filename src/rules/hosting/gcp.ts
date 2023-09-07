import { register } from '../../register.js';

register({
  tech: 'gcp',
  name: 'Google Cloud Platform',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: 'googleapis' },
    { type: 'npm', name: /^@google-cloud\//, example: '@google-cloud/storage' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/google' },
    { type: 'ruby', name: /^google-cloud-/, example: 'google-cloud-storage' },
    { type: 'rust', name: /^google-cloud-/, example: 'google-cloud-metadata' },
    { type: 'php', name: 'google/cloud' },
  ],
});
