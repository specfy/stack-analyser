import { register } from '../../rules';

register({
  tech: 'relativeci',
  files: ['relativeci.config.js'],
  dependencies: [{ type: 'npm', name: '@relative-ci/agent' }],
});
