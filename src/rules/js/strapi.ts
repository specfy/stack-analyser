import { register } from '../../rules';

register({
  tech: 'strapi',
  dependencies: [
    { type: 'npm', name: 'strapi' },
    { type: 'npm', name: '@strapi/strapi' },
    { type: 'docker', name: /strapi/, example: 'strapi:0.0.0' },
  ],
});
