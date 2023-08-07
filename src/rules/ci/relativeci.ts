import { register } from '../../register.js';

register({
  tech: 'relativeci',
  name: 'RelateiveCI',
  type: 'ci',
  files: ['relativeci.config.js'],
  dependencies: [{ type: 'npm', name: '@relative-ci/agent' }],
});
