import { register } from '../../register.js';

register({
  tech: 'xai',
  name: 'X AI',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@ai-sdk/xai' },
    { type: 'python', name: 'langchain-xai' },
  ],
});
