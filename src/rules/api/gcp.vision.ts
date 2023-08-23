import { register } from '../../register.js';

register({
  tech: 'gcp.vision',
  name: 'Google Vision',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/vision' },
    {
      type: 'ruby',
      name: /^google-cloud-vision/,
      example: 'google-cloud-vision-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/vision' },
  ],
});
