import { register } from '../../register.js';

register({
  tech: 'payloadcms',
  name: 'Payload',
  type: 'framework',
  dependencies: [
    { type: 'npm', name: 'payload' },
    { type: 'npm', name: '@payload/plugin-seo' },
  ],
});
