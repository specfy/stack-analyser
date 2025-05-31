import { register } from '../../register.js';

register({
  tech: 'amplitude',
  name: 'Amplitude Analytics',
  type: 'analytics',
  dependencies: [
    { type: 'npm', name: 'amplitude-js' },
    { type: 'npm', name: '@amplitude/analytics-browser' },
    { type: 'php', name: 'zumba/amplitude-php' },
    { type: 'terraform.resource', name: 'airbyte_source_amplitude' },
  ],
});
