import { register } from '../../register.js';

register({
  tech: 'webflow',
  name: 'Webflow',
  type: 'saas',
  dependencies: [{ type: 'npm', name: 'webflow-api' }],
});
