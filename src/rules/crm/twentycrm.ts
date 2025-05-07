import { register } from '../../register.js';

register({
  tech: 'twentycrm',
  name: 'Twenty CRM',
  type: 'crm',
  dependencies: [{ type: 'docker', name: 'twentycrm/twenty' }],
});
