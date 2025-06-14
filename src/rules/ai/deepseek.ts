import { register } from '../../register.js';

register({
  tech: 'deepseek',
  name: 'Deepseek',
  type: 'ai',
  dotenv: ['DEEPSEEK_'],
  dependencies: [
    { type: 'npm', name: '@ai-sdk/deepsek' },
    { type: 'npm', name: '@langchain/deepsek' },
    { type: 'npm', name: 'n8n-nodes-deepseek' },
    { type: 'python', name: 'langchain-deepseek' },
  ],
});
