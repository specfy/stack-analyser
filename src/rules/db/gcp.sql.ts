import { register } from '../../rules.js';

register({
  tech: 'gcp.sql',
  dependencies: [
    { type: 'npm', name: '@google-cloud/cloud-sql-connector' },
    {
      type: 'terraform.resource',
      name: 'google_sql_database_instance',
    },
    {
      type: 'terraform.resource',
      name: 'google_sql_database',
    },
  ],
});
