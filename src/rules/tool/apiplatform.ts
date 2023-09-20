import { register } from '../../register.js';

register({
  tech: 'apiplatform',
  name: 'Api Platform',
  type: 'tool',
  dependencies: [
    { type: 'php', name: 'api-platform/core' },
    { type: 'npm', name: '@api-platform/client' },
  ],
});
