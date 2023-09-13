import { register } from '../../register.js';

register({
  tech: 'sitecore',
  name: 'Sitecore',
  type: 'hosting',
  dependencies: [{ type: 'npm', name: '@sitecore-jss/sitecore-jss' }],
});
