import { register } from '../../register.js';

register({
  tech: 'koa',
  name: 'Koa',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'koa' },
    { type: 'npm', name: '@opentelemetry/instrumentation-koa' },
  ],
});
