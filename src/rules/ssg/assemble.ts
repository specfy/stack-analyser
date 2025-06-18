import { register } from '../../register.js';

register({
  tech: 'assemble',
  name: 'Assemble',
  type: 'ssg',
  dependencies: [{ type: 'npm', name: 'assemble' }],
});
