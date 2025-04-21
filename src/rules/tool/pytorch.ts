import { register } from '../../register.js';

register({
  tech: 'pytorch',
  name: 'Pytorch',
  type: 'tool',
  dependencies: [{ type: 'python', name: 'pytorch' }],
});
