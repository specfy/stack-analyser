import { register } from '../../register.js';

register({
  tech: 'zoom',
  name: 'Zoom',
  type: 'communication',
  dependencies: [
    { type: 'npm', name: '@zoom/meetingsdk' },
    { type: 'terraform.resource', name: 'airbyte_source_zoom' },
  ],
});
