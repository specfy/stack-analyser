import { register } from '../../register.js';

register({
  tech: 'mistralai',
  name: 'Mistral AI',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@ai-sdk/mistral' },
    { type: 'npm', name: 'genkitx-mistral' },
    { type: 'python', name: 'mistralai' },
    { type: 'npm', name: '@mistralai/mistralai' },
    { type: 'golang', name: 'github.com/gage-technologies/mistral-go' },
  ],
});
