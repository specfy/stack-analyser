import { register } from '../../register.js';

register({
  tech: 'gitlab.ci',
  name: 'Gitlab CI',
  type: 'ci',
  files: ['.gitlab-ci.yml', '.gitlab-ci.yaml'],
});
