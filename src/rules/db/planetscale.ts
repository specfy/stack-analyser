import { register } from '../../register.js';

register({
  tech: 'planetscale',
  name: 'PlanetScale',
  type: 'db',
  dependencies: [
    { type: 'githubAction', name: 'planetscale/create-branch-action' },
  ],
});
