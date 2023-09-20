import { register } from '../../register.js';

register({
  tech: 'sap',
  name: 'SAP',
  type: 'saas',
  dependencies: [{ type: 'npm', name: '@sap/hana-client' }],
});
