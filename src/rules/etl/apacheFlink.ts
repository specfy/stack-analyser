import { register } from '../../register.js';

register({
  tech: 'apache_flink',
  name: 'Apache Flink',
  type: 'etl',
  dependencies: [{ type: 'docker', name: 'apache/flink' }],
});
