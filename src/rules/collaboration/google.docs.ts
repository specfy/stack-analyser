import { register } from '../../register.js';

register({
  tech: 'google.docs',
  name: 'Google Docs',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/docs' },
    { type: 'ruby', name: 'google-apis-docs_v1' },
  ],
});
