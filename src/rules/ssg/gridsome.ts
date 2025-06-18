import { register } from '../../register.js';

register({
  tech: 'gridsome',
  name: 'Gridsome',
  type: 'ssg',
  files: ['gridsome.config.js'],
  dependencies: [{ type: 'npm', name: 'gridsome' }],
});
