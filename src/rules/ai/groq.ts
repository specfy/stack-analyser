import { register } from '../../register.js';

register({
  tech: 'groq',
  name: 'Groq',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@langchain/groq' },
    { type: 'npm', name: '@ai-sdk/groq' },
    { type: 'npm', name: 'groq-sdk' },
    { type: 'npm', name: 'genkitx-groq ' },
  ],
});
