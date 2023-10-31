import { register } from '../../register.js';

register({
  tech: 'railway',
  name: 'Railway',
  type: 'cloud',
  files: ['railway.toml', 'railway.json'],
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/terraform-community-providers/railway',
    },
    { type: 'npm', name: 'railway' },
    { type: 'npm', name: '@railway/cli' },
    { type: 'githubAction', name: 'bervProject/railway-deploy' },
  ],
});
