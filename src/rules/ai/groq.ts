import { register } from '../../register.js';

register({
  tech: 'groq',
  name: 'Groq',
  type: 'ai',
  dotenv: ['GROQ_'],
  dependencies: [
    { type: 'npm', name: '@langchain/groq' },
    { type: 'npm', name: '@ai-sdk/groq' },
    { type: 'npm', name: 'groq-sdk' },
    { type: 'npm', name: 'genkitx-groq ' },
    { type: 'python', name: 'langchain-groq' },
  ],
});
