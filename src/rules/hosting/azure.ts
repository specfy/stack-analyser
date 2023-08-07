import { register } from '../../register.js';

register({
  tech: 'azure',
  name: 'Azure',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/azurerm' },
    { type: 'golang', name: 'github.com/Azure/azure-sdk-for-go' },
    { type: 'rust', name: 'azure_core' },
    { type: 'ruby', name: 'azure-armrest' },
  ],
});
