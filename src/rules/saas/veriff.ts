import { register } from '../../register.js';

register({
  tech: 'veriff',
  name: 'Veriff',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@veriff/js-sdk' },
    { type: 'npm', name: '@veriff/incontext-sdk' },
    { type: 'ruby', name: 'veriff' },
  ],
});
