import { register } from '../../register.js';

register({
  tech: 'commercetools',
  name: 'Commercetools',
  type: 'cms',
  dependencies: [
    { type: 'npm', name: '@commercetools/platform-sdk' },
    { type: 'npm', name: '@commercetools/sdk-client-v2' },
    { type: 'npm', name: '@commercetools/sdk-middleware-http' },
  ],
});
