import { register } from '../../register.js';

register({
  tech: 'cohereai',
  name: 'Cohere AI',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@langchain/cohere' },
    { type: 'npm', name: '@ai-sdk/cohere' },
    { type: 'npm', name: '@llamaindex/cohere' },
    { type: 'npm', name: 'cohere-ai' },
    { type: 'python', name: 'cohere' },
    { type: 'golang', name: 'github.com/cohere-ai/cohere-go/v2' },
  ],
});
