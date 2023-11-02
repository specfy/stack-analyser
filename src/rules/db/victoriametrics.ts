import { register } from '../../register.js';

register({
  tech: 'victoriametrics',
  name: 'VictoriaMetrics',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'victoriametrics/victoria-metrics' },
    { type: 'docker', name: 'victoriametrics/vmagent' },
    { type: 'docker', name: 'victoriametrics/operator' },
    { type: 'docker', name: 'victoriametrics/vminsert' },
    { type: 'docker', name: 'victoriametrics/vmstorage' },
  ],
});
