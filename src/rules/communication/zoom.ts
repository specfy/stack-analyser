import { register } from '../../register.js';

register({
  tech: 'zoom',
  name: 'Zoom',
  type: 'communication',
  dotenv: ['ZOOM_'],
  dependencies: [
    { type: 'npm', name: '@zoom/meetingsdk' },
    { type: 'terraform.resource', name: 'airbyte_source_zoom' },
  ],
});
