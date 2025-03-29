import { register } from '../../register.js';

register({
  tech: 'apache_spark',
  name: 'Apache Spark',
  type: 'db',
  dependencies: [{ type: 'docker', name: 'apache/spark' }],
});
