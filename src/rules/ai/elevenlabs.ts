import { register } from '../../register.js';

register({
  tech: 'elevenlabs',
  name: 'Elevenlabs',
  type: 'ai',
  dotenv: ['ELEVENLABS_'],
  dependencies: [
    { type: 'python', name: 'elevenlabs' },
    { type: 'npm', name: '@elevenlabs/react' },
    { type: 'npm', name: '@elevenlabs/react-native' },
    { type: 'npm', name: '@elevenlabs/client' },
  ],
});
