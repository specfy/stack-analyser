import { register } from '../../register.js';

register({
  tech: 'gcp.maps',
  name: 'Google Maps',
  type: 'maps',
  dotenv: ['GOOGLE_MAPS_'],
  dependencies: [
    { type: 'npm', name: '@google-cloud/maps' },
    { type: 'npm', name: /^@googlemaps\//, example: '@googlemaps/places' },
    { type: 'ruby', name: 'google_maps_service' },
    { type: 'golang', name: 'cloud.google.com/go/maps' },
    { type: 'python', name: 'google-maps-mapsplatformdatasets' },
  ],
});
