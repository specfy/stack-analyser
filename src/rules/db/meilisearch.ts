import { register } from '../../register.js';

register({
  tech: 'meilisearch',
  name: 'Meilisearch',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'meilisearch' },
    { type: 'npm', name: '@meilisearch/instant-meilisearch' },
    {
      type: 'docker',
      name: 'getmeili/meilisearch',
      example: 'getmeili/meilisearch:0.0.0',
    },
    { type: 'golang', name: 'github.com/meilisearch/meilisearch-go' },
    { type: 'rust', name: 'meilisearch-sdk' },
    { type: 'ruby', name: 'elastimeilisearchcsearch' },
    { type: 'php', name: 'meilisearch/meilisearch-php ' },
  ],
});
