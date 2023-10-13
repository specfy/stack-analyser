import { register } from '../../register.js';

register({
  tech: 'meilisearch',
  name: 'Meilisearch',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'meilisearch' },
    { type: 'npm', name: '@meilisearch/instant-meilisearch' },
    { type: 'docker', name: 'getmeili/meilisearch' },
    { type: 'golang', name: 'github.com/meilisearch/meilisearch-go' },
    { type: 'rust', name: 'meilisearch-sdk' },
    { type: 'ruby', name: 'meilisearch' },
    { type: 'ruby', name: 'meilisearch-rails' },
    { type: 'php', name: 'meilisearch/meilisearch-php ' },
  ],
});
