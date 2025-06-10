import { register } from '../../register.js';

register({
  tech: 'opentelemetry',
  name: 'OpenTelemetry',
  type: 'monitoring',
  dotenv: ['OTEL_'],
  dependencies: [
    { type: 'npm', name: '@opentelemetry/core' },
    { type: 'npm', name: '@opentelemetry/api' },
    { type: 'npm', name: '@opentelemetry/sdk-node' },
    { type: 'npm', name: '@opentelemetry/semantic-conventions' },
    { type: 'docker', name: 'otel/opentelemetry-collector-contrib' },
    { type: 'docker', name: 'otel/opentelemetry-collector' },
    { type: 'docker', name: 'otel/opentelemetry-operator' },
    { type: 'golang', name: 'go.opentelemetry.io/otel' },
    { type: 'php', name: 'open-telemetry/sdk' },
    { type: 'python', name: 'opentelemetry-distro' },
    { type: 'ruby', name: 'opentelemetry-sdk' },
    { type: 'rust', name: 'opentelemetry' },
  ],
});
