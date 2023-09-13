import { register } from '../../register.js';

register({
  tech: 'lighthouse',
  name: 'Lighthouse',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'lighthouse' },
    { type: 'githubAction', name: 'jakejarvis/lighthouse-action' },
    { type: 'githubAction', name: 'foo-software/lighthouse-check-action' },
    { type: 'githubAction', name: 'treosh/lighthouse-ci-action' },
    { type: 'docker', name: 'femtopixel/google-lighthouse' },
  ],
});
