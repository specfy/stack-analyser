import { register } from '../../register.js';

register({
  tech: 'contenful',
  name: 'Contentful',
  type: 'saas',
  dependencies: [
    { type: 'php', name: 'contentful/contentful' },
    { type: 'php', name: 'contentful/contentful-management' },
    { type: 'npm', name: 'contentful' },
    { type: 'npm', name: 'contentful-management' },
  ],
});
