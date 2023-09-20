import { register } from '../../register.js';

register({
  tech: 'vale',
  name: 'Vale',
  type: 'tool',
  files: ['.vale.ini'],
  dependencies: [
    { type: 'docker', name: 'jdkato/vale' },
    { type: 'githubAction', name: 'errata-ai/vale-action' },
  ],
});
