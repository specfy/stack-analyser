import { register } from '../../register.js';

register({
  tech: 'clickhouse',
  name: 'Clickhouse',
  type: 'db',
  dependencies: [
    { type: 'npm', name: /^@clickhouse\//, example: '@clickhouse/client' },
    { type: 'docker', name: 'clickhouse/clickhouse-server' },
    { type: 'golang', name: 'github.com/ClickHouse/clickhouse-go' },
  ],
});
