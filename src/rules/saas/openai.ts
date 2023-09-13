import { register } from '../../register.js';

register({
  tech: 'openai',
  name: 'Openai',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'openai' },
    { type: 'php', name: 'openai-php/client' },
    { type: 'php', name: 'openai-php/laravel' },
  ],
});
