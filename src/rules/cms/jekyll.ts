import { register } from '../../register.js';

register({
  tech: 'jekyll',
  name: 'Jekyll',
  type: 'cms',
  dependencies: [{ type: 'githubAction', name: 'jeffreytse/jekyll-deploy-action' }],
});
