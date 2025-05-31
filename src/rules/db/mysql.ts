import { register } from '../../register.js';

register({
  tech: 'mysql',
  name: 'Mysql',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'mysql' },
    { type: 'npm', name: '@mikro-orm/mysql' },
    { type: 'npm', name: 'mysql2' },
    { type: 'npm', name: '@opentelemetry/instrumentation-mysql' },
    { type: 'docker', name: /mysql/, example: 'mysql:0.0.0' },
    { type: 'rust', name: /^mysql/, example: 'mysql_async' },
    { type: 'ruby', name: 'ruby-mysql' },
    { type: 'ruby', name: 'mysql2' },
    { type: 'npm', name: '@pulumi/mysql' },
    { type: 'python', name: 'mysql-connector-python' },
    { type: 'python', name: 'PyMySQL' },
    { type: 'python', name: 'mysqlclient' },
    { type: 'terraform.resource', name: 'airbyte_destination_mysql' },
  ],
});
