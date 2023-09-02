import { register } from '../../register.js';

register({
  tech: 'airtable',
  name: 'Airtable',
  type: 'saas',
  dependencies: [{ type: 'npm', name: 'airtable' }],
});
