import { register } from '../../register.js';

register({
  tech: 'apache_hadoop',
  name: 'Apache Hadoop',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'apache/hadoop' },
    { type: 'ruby', name: 'hadoop-metrics2' },
  ],
});
