import { register } from '../../register.js';

register({
  tech: 'clickhouse',
  name: 'ClickHouse',
  type: 'db',
  dependencies: [
    { type: 'npm', name: /^@clickhouse\//, example: '@clickhouse/client' },
    { type: 'docker', name: 'clickhouse/clickhouse-server' },
    { type: 'golang', name: 'github.com/ClickHouse/clickhouse-go' },
    { type: 'golang', name: 'github.com/ClickHouse/clickhouse-go/v2' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/ClickHouse/clickhouse',
    },
    { type: 'php', name: 'smi2/phpclickhouse' },
    { type: 'php', name: 'glushkovds/phpclickhouse-laravel' },
    { type: 'python', name: 'clickhouse-connect' },
    { type: 'rust', name: 'clickhouse' },
    { type: 'ruby', name: 'clickhouse-activerecord' },
    { type: 'terraform.resource', name: 'airbyte_destination_clickhouse' },
  ],
});
