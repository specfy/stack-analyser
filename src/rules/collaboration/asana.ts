import { register } from '../../register.js';

register({
  tech: 'asana',
  name: 'Asana',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: 'asana' },
    { type: 'python', name: 'asana' },
    { type: 'ruby', name: 'asana' },
    { type: 'php', name: 'asana/asana' },
    { type: 'golang', name: 'github.com/Asana/go-asana' },
    { type: 'terraform.resource', name: 'airbyte_source_asana' },
  ],
});
