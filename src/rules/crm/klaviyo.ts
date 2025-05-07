import { register } from '../../register.js';

register({
  tech: 'klaviyo',
  name: 'Klaviyo',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'klaviyo/magento2-extension' }],
});
