import { register } from '../../register.js';

register({
  tech: 'azure.mysql',
  name: 'Azure MySQL',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_mysql_/,
      example: 'azurerm_mysql_database',
    },
    { type: 'ruby', name: 'azure_mgmt_mysql' },
    { type: 'rust', name: 'azure_mgmt_mysql' },
    { type: 'npm', name: '@azure/arm-mysql' },
    { type: 'githubAction', name: 'azure/mysql' },
    {
      type: 'golang',
      name: 'github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/mysql/armmysql',
    },
  ],
});
