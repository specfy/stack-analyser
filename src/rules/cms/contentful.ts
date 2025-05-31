import { register } from '../../register.js';

register({
  tech: 'contentful',
  name: 'Contentful',
  type: 'cms',
  dotenv: ['CONTENTFUL_'],
  dependencies: [
    { type: 'php', name: 'contentful/contentful' },
    { type: 'php', name: 'contentful/contentful-management' },
    { type: 'npm', name: 'contentful' },
    { type: 'npm', name: 'contentful-management' },
  ],
});
