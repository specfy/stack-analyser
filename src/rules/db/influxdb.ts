import { register } from '../../rules';

register({
  tech: 'influxdb',
  dependencies: [
    { type: 'npm', name: '@influxdata/influxdb-client' },
    { type: 'docker', name: /influxdb/ },
  ],
});
