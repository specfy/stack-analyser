import { register } from '../../rules.js';

register({
  tech: 'datadog',
  dependencies: [
    { type: 'npm', name: '@datadog/browser-logs' },
    { type: 'npm', name: '@datadog/browser-rum' },
    { type: 'npm', name: '@datadog/cli' },
    { type: 'npm', name: 'dd-trace' },
    { type: 'terraform', name: 'registry.terraform.io/datadog/datadog' },
  ],
});
