import { register } from '../../register.js';

register({
  tech: 'gcp.speech',
  name: 'Speech',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/speech' },
    {
      type: 'ruby',
      name: /^google-cloud-speech/,
      example: 'google-cloud-speech-v1',
    },
  ],
});
