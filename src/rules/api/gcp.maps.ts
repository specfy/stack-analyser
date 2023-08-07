import { register } from '../../rules.js';

register({
  tech: 'gcp.maps',
  dependencies: [
    { type: 'npm', name: '@google-cloud/maps' },
    { type: 'terraform.resource', name: '' },
    { type: 'ruby', name: 'google_maps_service' },
  ],
});
