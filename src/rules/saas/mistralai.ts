import { register } from '../../register.js';

register({
  tech: 'mistralai',
  name: 'Mistral AI',
  type: 'saas',
  dependencies: [{ type: 'npm', name: '@ai-sdk/mistral' }],
});
