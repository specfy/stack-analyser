import { register } from '../../register.js';

register({
  tech: 'mapbox',
  name: 'Mapbox',
  type: 'maps',
  dotenv: ['MAPBOX_'],
  dependencies: [
    { type: 'npm', name: 'mapbox-gl' },
    { type: 'npm', name: '@mapbox/mapbox-sdk' },
    { type: 'npm', name: '@mapbox/mapbox-gl-geocoder' },
    { type: 'rust', name: 'mapboxgl' },
    { type: 'ruby', name: 'mapbox-sdk' },
    { type: 'ruby', name: 'mapbox-rails' },
    { type: 'ruby', name: 'mapbox-gl-rails' },
    { type: 'python', name: 'mapbox-tilesets' },
    { type: 'php', name: 'geocoder-php/mapbox-provider' },
  ],
});
