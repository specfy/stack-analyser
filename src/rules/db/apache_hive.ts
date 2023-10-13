import { register } from '../../register.js';

register({
  tech: 'apache_hive',
  name: 'Apache Hive',
  type: 'db',
  dependencies: [{ type: 'docker', name: 'apache/hive' }],
});
