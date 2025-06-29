import { register } from '../../register.js';

register({
  tech: 'storyblok',
  name: 'Storyblok',
  type: 'cms',
  dependencies: [
    { type: 'npm', name: 'storyblok' },
    { type: 'npm', name: /^@storyblok\//, example: '@storyblok/react' },
    { type: 'php', name: 'storyblok/php-content-api-client' },
    { type: 'php', name: 'storyblok/php-client' },
    { type: 'python', name: 'storyblok' },
    { type: 'ruby', name: 'storyblok' },
  ],
});
