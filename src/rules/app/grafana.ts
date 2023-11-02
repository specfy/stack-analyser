import { register } from '../../register.js';

register({
  tech: 'grafana',
  name: 'Grafana',
  type: 'app',
  dependencies: [
    { type: 'docker', name: 'grafana/grafana-enterprise' },
    { type: 'docker', name: 'grafana/grafana-oss' },
    { type: 'docker', name: 'grafana/grafana' },
    { type: 'docker', name: 'grafana/agent' },
    { type: 'docker', name: 'grafana/tempo' },
    { type: 'docker', name: 'grafana/agent-operator' },

    {
      type: 'terraform',
      name: 'registry.terraform.io/grafana/grafana',
    },
  ],
});
