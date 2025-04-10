import { register } from '../../register.js';

register({
  tech: 'anthropic',
  name: 'Anthropic',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@anthropic-ai/sdk' },
    { type: 'npm', name: '@ai-sdk/anthropic' },
    { type: 'npm', name: '@langchain/anthropic' },
    { type: 'python', name: 'anthropic' },
    { type: 'golang', name: 'github.com/anthropics/anthropic-sdk-go' },
  ],
});
