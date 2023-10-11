import { register } from '../../register.js';

register({
  tech: 'checkov',
  name: 'Checkov',
  type: 'tool',
  dependencies: [
    { type: 'githubAction', name: 'bridgecrewio/checkov-action' },
    { type: 'docker', name: 'bridgecrew/checkov' },
  ],
});
