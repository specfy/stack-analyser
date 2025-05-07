import { register } from '../../register.js';

register({
  tech: 'twentycrm',
  name: 'Twenty CRM',
  type: 'saas',
  dependencies: [{ type: 'docker', name: 'twentycrm/twenty' }],
});
