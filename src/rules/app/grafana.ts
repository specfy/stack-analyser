import { register } from '../../register.js';

register({
  tech: 'grafana',
  name: 'Grafana',
  type: 'app',
  dependencies: [{ type: 'docker', name: 'grafana/grafana-enterprise' }],
});
