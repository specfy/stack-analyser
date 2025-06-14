import { register } from '../../register.js';

register({
  tech: 'datadog',
  name: 'Datadog',
  type: 'monitoring',
  dotenv: ['DD_'],
  dependencies: [
    { type: 'npm', name: /^@datadog\//, example: '@datadog/cli' },
    { type: 'npm', name: 'dd-trace' },
    { type: 'npm', name: 'datadog-metrics' },
    { type: 'npm', name: '@datadog/datadog-api-client' },
    { type: 'npm', name: '@pulumi/datadog' },
    { type: 'terraform', name: 'registry.terraform.io/datadog/datadog' },
    {
      type: 'terraform.resource',
      name: /^datadog_/,
      example: 'datadog_metric_metadata',
    },
    { type: 'rust', name: 'ddtrace' },
    { type: 'rust', name: 'datadog-apm' },
    { type: 'ruby', name: 'ddtrace' },
    { type: 'ruby', name: /datadog/, example: 'datadog-lambda' },
    { type: 'php', name: 'datadog/php-datadogstatsd' },
    { type: 'php', name: 'datadog/dd-trace' },
    { type: 'githubAction', name: 'DataDog/synthetics-ci-github-action' },
    { type: 'githubAction', name: 'datadog/agent-github-action' },
    { type: 'python', name: 'datadog' },
    { type: 'docker', name: 'datadog/agent' },
  ],
});
