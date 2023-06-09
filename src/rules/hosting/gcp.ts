import { register } from '../../rules.js';

register({
  tech: 'gcp',
  dependencies: [
    { type: 'npm', name: /@google-cloud\//, example: '@google-cloud/storage' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/google' },
  ],
});
