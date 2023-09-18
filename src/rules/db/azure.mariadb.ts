import { register } from '../../register.js';

register({
  tech: 'azure.mariadb',
  name: 'Azure MariaDB',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_mariadb_/,
      example: 'azurerm_mariadb_database',
    },
    { type: 'ruby', name: 'azure_mgmt_mariadb' },
    { type: 'rust', name: 'azure_mgmt_mariadb' },
    { type: 'npm', name: '@azure/arm-mariadb' },
    {
      type: 'golang',
      name: 'github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/mariadb/armmariadb',
    },
  ],
});
