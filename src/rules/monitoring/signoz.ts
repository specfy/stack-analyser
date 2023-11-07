import { register } from '../../register.js';

register({
  tech: 'signoz',
  name: 'Signoz',
  type: 'monitoring',
  dependencies: [
    { type: 'docker', name: 'signoz/frontend' },
    { type: 'docker', name: 'signoz/alertmanager' },
    { type: 'docker', name: 'signoz/query-service' },
    { type: 'docker', name: 'signoz/signoz-otel-collector' },
    { type: 'docker', name: 'signoz/locust' },
  ],
});
