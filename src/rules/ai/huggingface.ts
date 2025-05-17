import { register } from '../../register.js';

register({
  tech: 'huggingface',
  name: 'Hugging Face',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: /^@huggingface\//, example: '@huggingface/inference' },
    { type: 'python', name: 'langchain-huggingface' },
  ],
});
