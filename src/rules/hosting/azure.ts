import { register } from '../../rules.js';

register({
  tech: 'azure',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/azurerm' },
    { type: 'gomod', name: 'github.com/Azure/azure-sdk-for-go' },
    { type: 'rust', name: 'azure_core' },
    { type: 'ruby', name: 'azure-armrest' },
  ],
});
