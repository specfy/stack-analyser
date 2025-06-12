import { register } from '../../register.js';

register({
  tech: 'youtube',
  name: 'Youtube',
  type: 'communication',
  dotenv: ['YOUTUBE_'],
  dependencies: [
    { type: 'python', name: 'youtube-transcript-api' },
    { type: 'python', name: 'pytube' },
  ],
});
