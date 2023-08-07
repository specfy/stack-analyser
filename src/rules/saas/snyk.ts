import { register } from '../../rules.js';

register({
  tech: 'snyk',
  files: ['.snyk'],
  dependencies: [
    { type: 'npm', name: 'snyk' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/snyk-terraform-assets/snyk',
    },
  ],
});
