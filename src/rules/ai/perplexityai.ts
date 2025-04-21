import { register } from '../../register.js';

register({
  tech: 'perplexityai',
  name: 'Perplexity AI',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@ai-sdk/perplexity' },
    { type: 'npm', name: '@langchain/perplexity' },
    { type: 'npm', name: '@watzon/n8n-nodes-perplexity' },
  ],
});
