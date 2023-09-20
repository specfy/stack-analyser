import { register } from '../../register.js';

register({
  tech: 'tailscale',
  name: 'Tailscale',
  type: 'saas',
  dependencies: [
    { type: 'githubAction', name: 'tailscale/github-action' },
    { type: 'githubAction', name: 'tailscale/gitops-acl-action' },
  ],
});
