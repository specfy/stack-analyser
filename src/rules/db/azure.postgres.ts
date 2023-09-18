import { register } from '../../register.js';

register({
  tech: 'azure.postgres',
  name: 'Azure Postgres',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_postgresql_/,
      example: 'azurerm_postgresql_database',
    },
    { type: 'ruby', name: 'azure_mgmt_postgresql' },
    { type: 'rust', name: 'azure_mgmt_postgresql' },
    { type: 'npm', name: '@azure/arm-postgresql' },
    { type: 'githubAction', name: 'azure/postgresql' },
  ],
});
