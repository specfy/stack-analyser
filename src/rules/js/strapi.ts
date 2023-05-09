import { register } from '../../rules.js';

register({
  tech: 'strapi',
  dependencies: [
    { type: 'npm', name: 'strapi' },
    { type: 'npm', name: '@strapi/strapi' },
    { type: 'docker', name: /strapi/, example: 'strapi:0.0.0' },
  ],
});
