import { register } from '../../register.js';

register({
  tech: 'spotify',
  name: 'Spotify',
  type: 'saas',
  dotenv: ['SPOTIFY_'],
  dependencies: [{ type: 'npm', name: 'spotify-web-api-node' }],
});
