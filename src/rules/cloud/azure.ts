import { register } from '../../register.js';

register({
  tech: 'azure',
  name: 'Azure',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/azurerm' },
    { type: 'golang', name: 'github.com/Azure/azure-sdk-for-go' },
    { type: 'rust', name: 'azure_core' },
    { type: 'ruby', name: 'azure-armrest' },
    { type: 'githubAction', name: 'azure/login' },
    { type: 'githubAction', name: 'azure/CLI' },
    { type: 'githubAction', name: 'azure/powershell' },
    { type: 'docker', name: 'bitnami/azure-cli' },
    { type: 'docker', name: 'cimg/azure' },
    { type: 'docker', name: 'webdevops/azure-devops-exporter' },
    { type: 'docker', name: 'webdevops/azure-metrics-exporter' },
  ],
});
