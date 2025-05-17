import { register } from '../../register.js';

register({
  tech: 'hugo',
  name: 'Hugo',
  type: 'framework',
  files: ['hugo.toml'],
  dependencies: [
    { type: 'docker', name: 'betterweb/hugo' },
    { type: 'docker', name: 'hugomods/hugo' },
    { type: 'docker', name: 'klakegg/hugo' },
    { type: 'githubAction', name: 'peaceiris/actions-hugo' },
    { type: 'npm', name: 'hugo-lunr-indexer' },
    { type: 'npm', name: 'hugo-extended' },
  ],
});
