import { register } from '../../register.js';

register({
  tech: 'strapi',
  name: 'Strapi',
  type: 'framework',
  dependencies: [
    { type: 'npm', name: 'strapi' },
    { type: 'npm', name: '@strapi/strapi' },
    { type: 'docker', name: /strapi/, example: 'strapi:0.0.0' },
  ],
});
