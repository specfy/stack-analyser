import { register } from '../../register.js';

register({
  tech: 'duckdb',
  name: 'DuckDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'duckdb' },
    { type: 'terraform.resource', name: 'airbyte_destination_duckdb' },
  ],
});
