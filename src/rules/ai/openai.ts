import { register } from '../../register.js';

register({
  tech: 'openai',
  name: 'Openai',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: 'openai' },
    { type: 'npm', name: '@ai-sdk/openai' },
    { type: 'php', name: 'openai-php/client' },
    { type: 'php', name: 'openai-php/laravel' },
    { type: 'npm', name: 'gpt3-tokenizer' },
    { type: 'npm', name: 'chatgpt' },
    { type: 'npm', name: 'genkitx-openai' },
    { type: 'python', name: 'langchain-openai' },
    { type: 'python', name: 'openai' },
  ],
});
