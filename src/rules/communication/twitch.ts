import { register } from '../../register.js';

register({
  tech: 'twitch',
  name: 'Twitch',
  type: 'communication',
  dotenv: ['TWITCH_'],
  dependencies: [
    { type: 'npm', name: 'tmi.js' },
    { type: 'npm', name: 'passport-twitch-strategy' },
  ],
});
