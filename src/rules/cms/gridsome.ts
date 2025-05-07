import { register } from '../../register.js';

register({
  tech: 'gridsome',
  name: 'Gridsome',
  type: 'cms',
  files: ['gridsome.config.js'],
  dependencies: [{ type: 'npm', name: 'gridsome' }],
});
