import { register } from '../../register.js';

register({
  tech: 'google.slides',
  name: 'Google Slides',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/slides' },
    { type: 'ruby', name: 'google-apis-slides_v1' },
  ],
});
