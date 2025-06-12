import { register } from '../../register.js';

register({
  tech: 'huggingface',
  name: 'Hugging Face',
  type: 'ai',
  dotenv: ['HUGGINGFACE_'],
  dependencies: [
    { type: 'npm', name: /^@huggingface\//, example: '@huggingface/inference' },
    { type: 'python', name: 'langchain-huggingface' },
    { type: 'python', name: 'huggingface-hub' },
  ],
});
