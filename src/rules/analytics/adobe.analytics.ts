import { register } from '../../register.js';

register({
  tech: 'adobe.analytics',
  name: 'Adobe Analytics',
  type: 'analytics',
  dotenv: ['ADOBE_ANALYTICS_'],
  dependencies: [{ type: 'npm', name: '@adobe/aio-lib-analytics' }],
});
