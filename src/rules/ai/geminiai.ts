import { register } from '../../register.js';

register({
  tech: 'geminiai',
  name: 'Gemini AI',
  type: 'ai',
  dotenv: ['GEMINI_'],
  dependencies: [
    { type: 'python', name: 'genai' },
    { type: 'npm', name: '@google/genai' },
    { type: 'npm', name: 'gemini-ai' },
    { type: 'python', name: 'langchain-google-genai' },
  ],
});
