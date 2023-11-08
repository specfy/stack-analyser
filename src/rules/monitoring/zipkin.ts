import { register } from '../../register.js';

register({
  tech: 'zipkin',
  name: 'Zipkin',
  type: 'monitoring',
  dependencies: [
    { type: 'docker', name: 'openzipkin/zipkin' },
    { type: 'golang', name: 'github.com/openzipkin/zipkin-go' },
    {
      type: 'golang',
      name: 'github.com/openzipkin-contrib/zipkin-go-opentracing',
    },
    { type: 'golang', name: 'github.com/go-kit/kit/tracing/zipkin' },
    { type: 'golang', name: 'go.opentelemetry.io/otel/exporters/zipkin' },
    { type: 'golang', name: 'contrib.go.opencensus.io/exporter/zipkin' },
    { type: 'npm', name: 'zipkin' },
    { type: 'npm', name: 'zipkin-context-cls' },
    { type: 'npm', name: 'zipkin-transport-http' },
    { type: 'npm', name: '@opentelemetry/exporter-zipkin' },
    { type: 'ruby', name: 'zipkin-tracer' },
    { type: 'php', name: 'openzipkin/zipkin' },
  ],
});
