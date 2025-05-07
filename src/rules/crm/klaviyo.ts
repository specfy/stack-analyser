import { register } from '../../register.js';

register({
  tech: 'klaviyo',
  name: 'Klaviyo',
  type: 'crm',
  dependencies: [{ type: 'php', name: 'klaviyo/magento2-extension' }],
});
