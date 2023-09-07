import { register } from '../../register.js';

register({
  tech: 'magento',
  name: 'Magento',
  type: 'tool',
  dependencies: [
    { type: 'php', name: 'magento/composer' },
    { type: 'php', name: 'fastly/magento2' },
    { type: 'php', name: 'smile/elasticsuite' },
  ],
});
