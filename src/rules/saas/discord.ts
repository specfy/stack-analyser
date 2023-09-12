import { register } from '../../register.js';

register({
  tech: 'discord',
  name: 'Discord',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'discord.js' },
    {
      type: 'npm',
      name: 'discord-interactions',
    },
    { type: 'githubAction', name: 'Ilshidur/action-discord' },
  ],
});
