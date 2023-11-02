import { register } from '../../register.js';

register({
  tech: 'timescaledb',
  name: 'TimescaleDB',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'timescale/timescaledb-ha' },
    { type: 'docker', name: 'timescale/timescaledb' },
  ],
});
