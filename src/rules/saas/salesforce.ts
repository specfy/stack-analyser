import { register } from '../../register.js';

register({
  tech: 'salesforce',
  name: 'Salesforce',
  type: 'saas',
  dependencies: [
    {
      type: 'npm',
      name: /^@salesforce\//,
      example: '@salesforce/kit',
    },
    { type: 'npm', name: 'jsforce' },
  ],
});
