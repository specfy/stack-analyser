import { register } from '../../register.js';

register({
  tech: 'atlassian',
  name: 'Atlassian',
  type: 'cloud',
  dependencies: [{ type: 'python', name: 'atlassian-python-api' }],
});
