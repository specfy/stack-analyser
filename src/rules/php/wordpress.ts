import { register } from '../../register.js';

register({
  tech: 'wordpress',
  name: 'Wordpress',
  type: 'framework',
  dependencies: [
    { type: 'php', name: 'wp-cli/wp-cli' },
    { type: 'php', name: 'roots/wordpress' },
    { type: 'php', name: 'johnpbloch/wordpress' },
    { type: 'githubAction', name: '10up/action-wordpress-plugin-deploy' },
    { type: 'docker', name: 'wordpress' },
    { type: 'npm', name: 'gatsby-source-wordpress' },
    { type: 'npm', name: '@wordpress/block-editor' },
    { type: 'npm', name: '@wordpress/data' },
    { type: 'npm', name: '@wordpress/blocks' },
    { type: 'npm', name: '@wordpress/api-fetch' },
    { type: 'npm', name: '@wordpress/i18n' },
    { type: 'npm', name: '@wordpress/hooks' },
  ],
});
