import { register } from '../../register.js';

register({
  tech: 'algolia',
  name: 'Algolia',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@algolia\//, example: '@algolia/client' },
    { type: 'npm', name: 'algoliasearch' },
    { type: 'npm', name: 'instantsearch.js' },
    { type: 'npm', name: 'vue-instantsearch' },
    { type: 'npm', name: 'create-instantsearch-app' },
    { type: 'npm', name: 'react-instantsearch' },
    { type: 'npm', name: '@nuxtjs/algolia' },
    { type: 'npm', name: 'gatsby-plugin-algolia' },
    { type: 'npm', name: /^@docsearch\//, example: '@docsearch/react' },
    { type: 'npm', name: 'docsearch.js' },
    { type: 'rust', name: 'algoliasearch' },
    { type: 'ruby', name: 'algolia' },
    { type: 'ruby', name: 'algoliasearch-rails' },
    { type: 'php', name: 'algolia/algoliasearch-client-php' },
  ],
});
