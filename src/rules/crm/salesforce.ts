import { register } from '../../register.js';

register({
  tech: 'salesforce',
  name: 'Salesforce',
  type: 'crm',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/salesforce' },
    {
      type: 'npm',
      name: /^@salesforce\//,
      example: '@salesforce/kit',
    },
    { type: 'npm', name: 'jsforce' },
  ],
});
