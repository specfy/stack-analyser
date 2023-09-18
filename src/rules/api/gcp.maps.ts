import { register } from '../../register.js';

register({
  tech: 'gcp.maps',
  name: 'Google Maps',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/maps' },
    { type: 'ruby', name: 'google_maps_service' },
    { type: 'golang', name: 'cloud.google.com/go/maps' },
  ],
});
