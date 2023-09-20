import { register } from '../../register.js';

register({
  tech: 'servicenow',
  name: 'ServiceNow',
  type: 'saas',
  dependencies: [{ type: 'ruby', name: 'servicenow-api' }],
});
