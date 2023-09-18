import { register } from '../../register.js';

register({
  tech: 'azure.cosmosdb',
  name: 'Azure Cosmos DB',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_cosmosdb_/,
      example: 'azurerm_cosmosdb_table',
    },
    { type: 'ruby', name: 'azure_mgmt_cosmosdb' },
    { type: 'rust', name: 'azure_mgmt_cosmosdb' },
    { type: 'npm', name: '@azure/arm-cosmosdb' },
    { type: 'npm', name: '@azure/cosmos' },
    {
      type: 'golang',
      name: 'github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/cosmos/armcosmos',
    },
  ],
});
