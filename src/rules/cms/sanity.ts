import { register } from '../../register.js';

register({
  tech: 'sanity',
  name: 'Sanity',
  type: 'cms',
  dependencies: [{ type: 'npm', name: 'sanity' }],
});
