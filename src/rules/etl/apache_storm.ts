import { register } from '../../register.js';

register({
  tech: 'apache_storm',
  name: 'Apache Storm',
  type: 'etl',
  dependencies: [{ type: 'docker', name: 'apache/storm' }],
});
