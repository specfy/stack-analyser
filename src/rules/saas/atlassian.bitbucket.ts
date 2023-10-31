import { register } from '../../register.js';

register({
  tech: 'atlassian.bitbucket',
  name: 'atlassian.Bitbucket',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'bitbucket/client' }],
});
