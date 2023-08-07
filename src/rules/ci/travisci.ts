import { register } from '../../rules.js';

register({
  tech: 'travisci',
  files: ['.travis.yml', '.travis.yaml'],
  dependencies: [{ type: 'ruby', name: 'travis' }],
});
