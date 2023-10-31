import { register } from '../../register.js';

register({
  tech: 'atlassian.trello',
  name: 'Atlassian Trello',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'trello' },
    { type: 'npm', name: 'react-trello' },
    { type: 'npm', name: 'node-trello' },
    { type: 'ruby', name: 'ruby-trello' },
    { type: 'php', name: 'cdaguerre/php-trello-api' },
    { type: 'githubAction', name: 'jessicazu/trello-github-actions' },
  ],
});
