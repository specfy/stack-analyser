import { register } from '../../register.js';

register({
  tech: 'gcp.sql',
  name: 'Cloud SQL',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@google-cloud/cloud-sql-connector' },
    {
      type: 'terraform.resource',
      name: /^google_sql_/,
      example: 'google_sql_database_instance',
    },
    {
      type: 'ruby',
      name: /^google-apis-sql/,
      example: 'google-apis-sqladmin_v1beta4',
    },
    { type: 'php', name: 'google/cloud-sql-admin' },
  ],
});
