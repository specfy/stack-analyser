import { register } from '../../register.js';

register({
  tech: 'slatedocs',
  name: 'Slate',
  type: 'ssg',
  dependencies: [{ type: 'docker', name: 'slatedocs/slate' }],
});
