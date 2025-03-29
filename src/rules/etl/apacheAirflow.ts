import { register } from '../../register.js';

register({
  tech: 'apache_airflow',
  name: 'Apache Airflow',
  type: 'etl',
  dependencies: [{ type: 'docker', name: 'apache/airflow' }],
});
