import { register } from '../../register.js';

register({
  tech: 'blackfire',
  name: 'Blackfire',
  type: 'monitoring',
  dotenv: ['BLACKFIRE_'],
  dependencies: [
    { type: 'php', name: 'blackfire/php-sdk' },
    { type: 'docker', name: 'blackfire/blackfire' },
  ],
});
