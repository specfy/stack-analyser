import { register } from '../../register.js';

register({
  tech: 'n8n',
  name: 'n8n',
  type: 'automation',
  dependencies: [
    { type: 'docker', name: 'n8nio/n8n' },
    { type: 'npm', name: 'n8n' },
  ],
});
