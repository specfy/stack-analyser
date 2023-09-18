import { register } from '../../register.js';

register({
  tech: 'relativeci',
  name: 'RelativeCI',
  type: 'ci',
  files: ['relativeci.config.js'],
  dependencies: [
    { type: 'npm', name: '@relative-ci/agent' },
    { type: 'githubAction', name: 'relative-ci/agent-action' },
  ],
});
