import { register } from '../../register.js';

register({
  tech: 'joijs',
  name: 'Joi',
  type: 'validation',
  dependencies: [{ type: 'npm', name: 'joi' }],
});
