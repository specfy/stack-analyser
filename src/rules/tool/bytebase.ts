import { register } from '../../register.js';

register({
  tech: 'bytebase',
  name: 'Bytebase',
  type: 'tool',
  dependencies: [
    { type: 'docker', name: 'bytebase/bytebase' },
    { type: 'githubAction', name: 'bytebase/sql-review-action' },
  ],
});
