import { register } from '../../register.js';

register({
  tech: 'azure.sql',
  name: 'Azure SQL',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_sql_/,
      example: 'azurerm_sql_database',
    },
    { type: 'githubAction', name: 'azure/sql-action' },
    { type: 'ruby', name: 'azure_mgmt_sql' },
    { type: 'rust', name: 'azure_mgmt_sql' },
    { type: 'npm', name: '@azure/arm-sql' },
    {
      type: 'golang',
      name: 'github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/sql/armsql',
    },
  ],
});
