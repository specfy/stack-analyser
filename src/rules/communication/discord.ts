import { register } from '../../register.js';

register({
  tech: 'discord',
  name: 'Discord',
  type: 'communication',
  dependencies: [
    { type: 'npm', name: 'discord.js' },
    {
      type: 'npm',
      name: 'discord-interactions',
    },
    { type: 'githubAction', name: 'Ilshidur/action-discord' },
  ],
});
