import { register } from '../../register.js';

register({
  tech: 'ollama',
  name: 'Ollama',
  type: 'ai',
  dotenv: ['OLLAMA_'],
  dependencies: [
    { type: 'npm', name: '@langchain/ollama' },
    { type: 'npm', name: 'ollama-ai-provider' },
    { type: 'npm', name: 'genkitx-ollama' },
    { type: 'npm', name: 'ollama' },
    { type: 'python', name: 'langchain-ollama' },
    { type: 'python', name: 'ollama' },
  ],
});
