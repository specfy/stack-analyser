import { register } from '../../rules.js';

register({
  tech: 'gcp.speech',
  dependencies: [
    { type: 'npm', name: '@google-cloud/speech' },
    {
      type: 'ruby',
      name: /^google-cloud-speech/,
      example: 'google-cloud-speech-v1',
    },
  ],
});
