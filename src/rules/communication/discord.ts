import { register } from '../../register.js';

register({
  tech: 'discord',
  name: 'Discord',
  type: 'communication',
  dotenv: ['DISCORD_'],
  dependencies: [
    { type: 'npm', name: 'discord.js' },
    {
      type: 'npm',
      name: 'discord-interactions',
    },
    { type: 'githubAction', name: 'Ilshidur/action-discord' },
  ],
});
