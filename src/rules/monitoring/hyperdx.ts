import { register } from '../../register.js';

register({
  tech: 'hyperdx',
  name: 'HyperDX',
  type: 'monitoring',
  dependencies: [
    { type: 'npm', name: '@hyperdx/browser' },
    { type: 'npm', name: '@hyperdx/node-logger' },
    { type: 'npm', name: '@hyperdx/node-opentelemetry' },
    { type: 'npm', name: '@hyperdx/deno' },
    { type: 'npm', name: '@hyperdx/otel-react-native' },
    { type: 'golang', name: 'github.com/hyperdxio/hyperdx-go' },
  ],
});
