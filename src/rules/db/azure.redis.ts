import { register } from '../../register.js';

register({
  tech: 'azure.redis',
  name: 'Azure Redis',
  type: 'db',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_redis_/,
      example: 'azurerm_redis_cache',
    },
    { type: 'ruby', name: 'azure_mgmt_redis' },
    { type: 'rust', name: 'azure_mgmt_redis' },
    { type: 'npm', name: '@azure/arm-redis' },
    {
      type: 'golang',
      name: 'github.com/Azure/azure-sdk-for-go/sdk/resourcemanager/redis/armredis/v2',
    },
  ],
});
