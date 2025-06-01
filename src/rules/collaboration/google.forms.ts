import { register } from '../../register.js';

register({
  tech: 'google.forms',
  name: 'Google Forms',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/forms' },
    { type: 'terraform.resource', name: 'airbyte_source_google_forms' },
    { type: 'ruby', name: 'google-apis-forms_v1' },
  ],
});
