import { register } from '../../register.js';

register({
  tech: 'klaviyo',
  name: 'Klaviyo',
  type: 'crm',
  dependencies: [
    { type: 'php', name: 'klaviyo/magento2-extension' },
    { type: 'terraform.resource', name: 'airbyte_source_klaviyo' },
  ],
});
