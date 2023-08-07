import { register } from '../../rules.js';

register({
  tech: 'gcp.vision',
  dependencies: [
    { type: 'npm', name: '@google-cloud/vision' },
    {
      type: 'ruby',
      name: /^google-cloud-vision/,
      example: 'google-cloud-vision-v1',
    },
  ],
});
