import { register } from '../../register.js';

register({
  tech: 'azure.staticwebapps',
  name: 'Azure Static Web Apps',
  type: 'hosting',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^azurerm_app_service/,
      example: 'azurerm_app_service',
    },
    {
      type: 'terraform.resource',
      name: /^azurerm_linux_web_app/,
      example: 'azurerm_linux_web_app',
    },
    {
      type: 'terraform.resource',
      name: /^azurerm_windows_web_app/,
      example: 'azurerm_windows_web_app',
    },
    { type: 'npm', name: '@azure/static-web-apps-cli' },
    { type: 'ruby', name: 'azure_mgmt_web' },
    { type: 'githubAction', name: 'Azure/webapps-deploy' },
    { type: 'githubAction', name: 'Azure/static-web-apps-deploy' },
    { type: 'githubAction', name: 'Azure/appservice-build' },
  ],
});
