import { register } from '../../register.js';

register({
  tech: 'docsify',
  name: 'Docsify',
  type: 'ssg',
  dependencies: [{ type: 'npm', name: 'docsify-cli' }],
});
