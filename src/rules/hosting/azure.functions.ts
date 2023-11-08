import { register } from '../../register.js';

register({
  tech: 'azure.functions',
  name: 'Azure Functions',
  type: 'hosting',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_function_/,
      example: 'azurerm_function_app',
    },
    {
      type: 'terraform.resource',
      name: /^azurerm_linux_function_/,
      example: 'azurerm_linux_function_app',
    },
    {
      type: 'terraform.resource',
      name: /^azurerm_windows_function_/,
      example: 'azurerm_windows_function_app',
    },
    { type: 'npm', name: '@azure/functions' },
    { type: 'npm', name: 'durable-functions' },
    { type: 'npm', name: 'azure-functions-core-tools' },
    { type: 'ruby', name: 'fluent-plugin-azurefunctions' },
    { type: 'rust', name: 'azure-functions' },
    { type: 'rust', name: 'azure-functions-shared' },
    { type: 'githubAction', name: 'Azure/functions-container-action' },
    { type: 'githubAction', name: 'Azure/functions-action' },
  ],
});
