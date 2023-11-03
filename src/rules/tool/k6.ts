import { register } from '../../register.js';

register({
  tech: 'k6',
  name: 'Grafana K6',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'k6' },
    { type: 'golang', name: 'go.k6.io/xk6/cmd/xk6ver' },
    { type: 'docker', name: 'grafana/k6' },
  ],
});
