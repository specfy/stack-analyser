import { register } from '../../register.js';

register({
  tech: 'influxdb',
  name: 'InfluxDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@influxdata/influxdb-client' },
    { type: 'docker', name: /influxdb/, example: 'influxdb:0.0.0' },
    { type: 'rust', name: 'influxdb' },
    { type: 'rust', name: 'influxdb2' },
    { type: 'ruby', name: 'influxdb-client' },
    { type: 'php', name: 'influxdata/influxdb-client-php' },
  ],
});
