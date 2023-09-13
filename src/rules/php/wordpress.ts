import { register } from '../../register.js';

register({
  tech: 'wordpress',
  name: 'Wordpress',
  type: 'tool',
  dependencies: [
    { type: 'php', name: 'wp-cli/wp-cli' },
    { type: 'php', name: 'roots/wordpress' },
    { type: 'php', name: 'johnpbloch/wordpress' },
    { type: 'githubAction', name: '10up/action-wordpress-plugin-deploy' },
  ],
});
