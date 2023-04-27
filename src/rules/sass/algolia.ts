import { register } from '../../rules';

register({
  tech: 'algolia',
  dependencies: [
    { type: 'npm', name: '@algolia/autocomplete-js' },
    { type: 'npm', name: 'algoliasearch' },
    { type: 'npm', name: 'instantsearch.js' },
    { type: 'npm', name: '@docsearch/react' },
    { type: 'npm', name: '@docsearch/css' },
    { type: 'npm', name: '@docsearch/js' },
    { type: 'npm', name: 'docsearch.js' },
  ],
});
