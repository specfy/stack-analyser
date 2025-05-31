import { register } from '../../register.js';

register({
  tech: 'webflow',
  name: 'Webflow',
  type: 'cms',
  dependencies: [
    { type: 'npm', name: 'webflow-api' },
    { type: 'terraform.resource', name: 'airbyte_source_webflow' },
  ],
});
