import { register } from '../../register.js';

register({
  tech: 'openai',
  name: 'Openai',
  type: 'saas',
  dependencies: [{ type: 'npm', name: 'openai' }],
});
