import { register } from '../../register.js';

register({
  tech: 'jekyll',
  name: 'Jekyll',
  type: 'ssg',
  files: ['.jekyll-cache'],
  dependencies: [
    { type: 'githubAction', name: 'jeffreytse/jekyll-deploy-action' },
    { type: 'ruby', name: 'jekyll' },
  ],
});
