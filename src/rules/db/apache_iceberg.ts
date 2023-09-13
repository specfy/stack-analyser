import { register } from '../../register.js';

register({
  tech: 'apache_iceberg',
  name: 'Apache Iceberg',
  type: 'db',
  dependencies: [{ type: 'docker', name: 'apache/spark-iceberg' }],
});
