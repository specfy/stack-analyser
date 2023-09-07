import { register } from '../../register.js';

register({
  tech: 'bitbucket',
  name: 'Bitbucket',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'bitbucket/client' }],
});
