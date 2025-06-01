import { register } from '../../register.js';

register({
  tech: 'google.gmail',
  name: 'Gmail',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/gmail' },
    { type: 'ruby', name: 'google-apis-gmail_v1' },
  ],
});
