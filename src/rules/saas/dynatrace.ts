import { register } from '../../register.js';

register({
  tech: 'dynatrace',
  name: 'Dynatrace',
  type: 'saas',
  dependencies: [
    {
      type: 'npm',
      name: /^@dynatrace\//,
      example: '@dynatrace/opentelemetry-core',
    },
  ],
});
