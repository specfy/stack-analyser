import { register } from '../../rules.js';

register({
  tech: 'gcp',
  dependencies: [
    { type: 'npm', name: /^@google-cloud\//, example: '@google-cloud/storage' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/google' },
    { type: 'ruby', name: /^google-cloud-/, example: 'google-cloud-storage' },
    { type: 'rust', name: /^google-cloud-/, example: 'google-cloud-metadata' },
  ],
});
