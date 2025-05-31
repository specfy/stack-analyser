import { register } from '../../register.js';

register({
  tech: 'fastify',
  name: 'Fastify',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'fastify' },
    { type: 'npm', name: '@opentelemetry/instrumentation-fastify' },
  ],
});
