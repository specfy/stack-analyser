import { register } from '../../register.js';

register({
  tech: 'typesense',
  name: 'Typesense',
  type: 'db',
  dependencies: [
    { type: 'npm', name: 'typesense' },
    { type: 'npm', name: 'typesense-instantsearch-adapter' },
    { type: 'npm', name: 'gatsby-plugin-typesense' },
    { type: 'docker', name: 'typesense/typesense' },
    { type: 'golang', name: 'github.com/typesense/typesense-go/typesense' },
    { type: 'rust', name: 'typesense' },
    { type: 'ruby', name: 'typesense' },
    { type: 'php', name: 'typesense/typesense-php ' },
    { type: 'php', name: 'typesense/laravel-scout-typesense-driver' },
  ],
});
