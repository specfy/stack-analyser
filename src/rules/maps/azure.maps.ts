import { register } from '../../register.js';

register({
  tech: 'azure.maps',
  name: 'Bing Maps',
  type: 'maps',
  dotenv: ['AZURE_MAPS_'],
  dependencies: [
    { type: 'npm', name: '@azure/maps-control' },
    { type: 'npm', name: 'bingmaps' },
    { type: 'npm', name: 'azure-maps-control' },
    { type: 'npm', name: '@azure-rest/maps-search' },
    { type: 'terraform.resource', name: 'azurerm_maps_account' },
  ],
});
