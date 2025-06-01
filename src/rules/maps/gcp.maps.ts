import { register } from '../../register.js';

register({
  tech: 'gcp.maps',
  name: 'Google Maps',
  type: 'maps',
  dependencies: [
    { type: 'npm', name: '@google-cloud/maps' },
    { type: 'npm', name: /^@googlemaps\//, example: '@googlemaps/places' },
    { type: 'ruby', name: 'google_maps_service' },
    { type: 'golang', name: 'cloud.google.com/go/maps' },
  ],
});
