import { register } from '../../register.js';

register({
  tech: 'strapi',
  name: 'Strapi',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'strapi' },
    { type: 'npm', name: '@strapi/strapi' },
    { type: 'docker', name: /strapi/, example: 'strapi:0.0.0' },
  ],
});
