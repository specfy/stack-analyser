import { register } from '../../register.js';

register({
  tech: 'jekyll',
  name: 'Jekyll',
  type: 'ssg',
  dependencies: [{ type: 'githubAction', name: 'jeffreytse/jekyll-deploy-action' }],
});
