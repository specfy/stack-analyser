import { register } from '../../rules.js';

register({
  tech: 'algolia',
  dependencies: [
    { type: 'npm', name: '@algolia/autocomplete-js' },
    { type: 'npm', name: '@algolia/client-search' },
    { type: 'npm', name: '@algolia/client-common' },
    { type: 'npm', name: 'algoliasearch' },
    { type: 'npm', name: 'instantsearch.js' },
    { type: 'npm', name: 'vue-instantsearch' },
    { type: 'npm', name: 'create-instantsearch-app' },
    { type: 'npm', name: 'react-instantsearch' },
    { type: 'npm', name: '@nuxtjs/algolia' },
    { type: 'npm', name: 'gatsby-plugin-algolia' },
    { type: 'npm', name: '@docsearch/react' },
    { type: 'npm', name: '@docsearch/css' },
    { type: 'npm', name: '@docsearch/js' },
    { type: 'npm', name: 'docsearch.js' },
    { type: 'rust', name: 'algoliasearch' },
  ],
});
