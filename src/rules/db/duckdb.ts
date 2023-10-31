import { register } from '../../register.js';

register({
  tech: 'duckdb',
  name: 'DuckDB',
  type: 'db',
  dependencies: [{ type: 'npm', name: 'duckdb' }],
});
