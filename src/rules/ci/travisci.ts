import { register } from '../../register.js';

register({
  tech: 'travisci',
  name: 'TravisCI',
  type: 'ci',
  files: ['.travis.yml', '.travis.yaml'],
  dependencies: [{ type: 'ruby', name: 'travis' }],
});
