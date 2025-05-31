import { register } from '../../register.js';

register({
  tech: 'mssql',
  name: 'MS SQL',
  type: 'db',
  dependencies: [
    { type: 'ruby', name: 'jdbc-mssql' },
    { type: 'npm', name: 'mssql' },
    { type: 'npm', name: '@opentelemetry/instrumentation-tedious' },
  ],
});
