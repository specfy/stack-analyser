import { register } from '../../register.js';

register({
  tech: 'jekyll',
  name: 'Jekyll',
  type: 'framework',
  dependencies: [
    { type: 'githubAction', name: 'jeffreytse/jekyll-deploy-action' },
  ],
});
