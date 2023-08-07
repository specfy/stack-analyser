import { register } from '../../register.js';

register({
  tech: 'gcp.vision',
  name: 'Vision',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/vision' },
    {
      type: 'ruby',
      name: /^google-cloud-vision/,
      example: 'google-cloud-vision-v1',
    },
  ],
});
