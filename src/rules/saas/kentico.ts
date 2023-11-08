import { register } from '../../register.js';

register({
  tech: 'kentico',
  name: 'Kentico',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@kentico/xperience-admin-components' },
    { type: 'npm', name: 'kentico-kontent-nuxt-module' },
    { type: 'npm', name: '@kentico/gatsby-source-kontent' },
    {
      type: 'npm',
      name: '@sonarsource/marketing-gatsby-transformer-kontent-graphql',
    },
    { type: 'ruby', name: 'delivery-sdk-ruby' },
  ],
});
