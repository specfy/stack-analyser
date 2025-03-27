import { register } from '../../register.js';

register({
  tech: 'openai',
  name: 'Openai',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'openai' },
    { type: 'npm', name: '@ai-sdk/openai' },
    { type: 'npm', name: '@ai-sdk/azure' },
    { type: 'php', name: 'openai-php/client' },
    { type: 'php', name: 'openai-php/laravel' },
    { type: 'npm', name: 'gpt3-tokenizer' },
    { type: 'npm', name: 'chatgpt' },
  ],
});
