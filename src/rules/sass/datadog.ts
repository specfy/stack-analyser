import { register } from '../../rules';

register({
  tech: 'datadog',
  dependencies: [
    { type: 'npm', name: '@datadog/browser-logs' },
    { type: 'npm', name: '@datadog/browser-rum' },
    { type: 'npm', name: '@datadog/cli' },
    { type: 'npm', name: 'dd-trace' },
    { type: 'terraform', name: 'registry.terraform.io/DataDog/datadog' },
  ],
});
