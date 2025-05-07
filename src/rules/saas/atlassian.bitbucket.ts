import { register } from '../../register.js';

register({
  tech: 'atlassian.bitbucket',
  name: 'Atlassian Bitbucket',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'bitbucket/client' }],
});
