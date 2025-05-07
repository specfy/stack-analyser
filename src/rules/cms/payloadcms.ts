import { register } from '../../register.js';

register({
  tech: 'payloadcms',
  name: 'Payload',
  type: 'cms',
  dependencies: [
    { type: 'npm', name: 'payload' },
    { type: 'npm', name: '@payload/plugin-seo' },
  ],
});
