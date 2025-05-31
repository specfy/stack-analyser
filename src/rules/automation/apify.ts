import { register } from '../../register.js';

register({
  tech: 'apify',
  name: 'Apify',
  type: 'automation',
  dependencies: [
    { type: 'npm', name: 'apify' },
    { type: 'npm', name: 'apify-client' },
    { type: 'npm', name: /^@apify\//, example: '@apify/utilities' },
    { type: 'python', name: 'apify' },
    { type: 'terraform.resource', name: 'airbyte_source_apify_dataset' },
  ],
});
