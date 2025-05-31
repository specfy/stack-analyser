import { register } from '../../register.js';

register({
  tech: 'xai',
  name: 'X AI',
  type: 'ai',
  dotenv: ['XAI_'],
  dependencies: [
    { type: 'npm', name: '@ai-sdk/xai' },
    { type: 'python', name: 'langchain-xai' },
  ],
});
