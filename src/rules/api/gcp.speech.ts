import { register } from '../../register.js';

register({
  tech: 'gcp.speech',
  name: 'Google Speech',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/speech' },
    {
      type: 'ruby',
      name: /^google-cloud-speech/,
      example: 'google-cloud-speech-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/speech' },
  ],
});
