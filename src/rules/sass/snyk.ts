import { register } from '../../rules.js';

register({
  tech: 'snyk',
  files: ['.snyk'],
  dependencies: [{ type: 'npm', name: 'snyk' }],
});
