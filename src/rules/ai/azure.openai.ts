import { register } from '../../register.js';

register({
  tech: 'azure.openai',
  name: 'Azure Openai',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@ai-sdk/azure' },
    { type: 'npm', name: 'genkitx-azure-openai' },
  ],
});
