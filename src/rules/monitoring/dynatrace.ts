import { register } from '../../register.js';

register({
  tech: 'dynatrace',
  name: 'Dynatrace',
  type: 'monitoring',
  dotenv: ['DYNATRACE_'],
  dependencies: [
    {
      type: 'npm',
      name: /^@dynatrace\//,
      example: '@dynatrace/opentelemetry-core',
    },
  ],
});
