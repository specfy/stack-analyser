import { register } from '../../register.js';

register({
  tech: 'azure.aks',
  name: 'Azure Kubernetes',
  type: 'hosting',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_kubernetes_/,
      example: 'azurerm_kubernetes_cluster',
    },
  ],
});
