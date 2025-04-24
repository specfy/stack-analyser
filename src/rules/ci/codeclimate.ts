import { register } from '../../register.js';

register({
  tech: 'codeclimate',
  name: 'Code Climate',
  type: 'ci',
  files: ['.codeclimate.yml'],
  dependencies: [
    { type: 'githubAction', name: 'paambaati/codeclimate-action' },
    { type: 'githubAction', name: 'remarkablemark/setup-codeclimate' },
  ],
});
