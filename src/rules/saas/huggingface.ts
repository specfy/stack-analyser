import { register } from '../../register.js';

register({
  tech: 'huggingface',
  name: 'Hugging Face',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: /^@huggingface\//, example: '@huggingface/inference' },
  ],
});
