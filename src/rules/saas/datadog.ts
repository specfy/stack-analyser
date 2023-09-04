import { register } from '../../register.js';

register({
  tech: 'datadog',
  name: 'Datadog',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@datadog\//, example: '@datadog/cli' },
    { type: 'npm', name: 'dd-trace' },
    { type: 'npm', name: 'datadog-metrics' },
    { type: 'terraform', name: 'registry.terraform.io/datadog/datadog' },
    { type: 'terraform.resource', name: 'datadog_metric_metadata' },
    { type: 'terraform.resource', name: 'datadog_application_key' },
    { type: 'terraform.resource', name: 'datadog_monitor' },
    { type: 'rust', name: 'ddtrace' },
    { type: 'rust', name: 'datadog-apm' },
    { type: 'ruby', name: 'ddtrace' },
    { type: 'ruby', name: /datadog/, example: 'datadog-lambda' },
  ],
});
