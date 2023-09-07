import { register } from '../../register.js';

register({
  tech: 'mixpanel',
  name: 'Mixpanel',
  type: 'analytics',
  dependencies: [{ type: 'php', name: 'mixpanel/mixpanel-php' }],
});
