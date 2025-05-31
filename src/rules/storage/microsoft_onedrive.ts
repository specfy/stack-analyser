import { register } from '../../register.js';

register({
  tech: 'microsoft_onedrive',
  name: 'OneDrive',
  type: 'storage',
  dependencies: [
    { type: 'rust', name: 'onedrive-api' },
    { type: 'php', name: 'krizalys/onedrive-php-sdk' },
    { type: 'npm', name: '@uppy/onedrive' },
    { type: 'terraform.resource', name: 'airbyte_source_microsoft_onedrive' },
  ],
});
