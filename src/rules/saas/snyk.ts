import { register } from '../../register.js';

register({
  tech: 'snyk',
  name: 'Snyk',
  type: 'saas',
  files: ['.snyk'],
  dependencies: [
    { type: 'npm', name: 'snyk' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/snyk-terraform-assets/snyk',
    },
  ],
});
