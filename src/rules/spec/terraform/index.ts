import { register } from '../../../register.js';

import { detectTerraformLockfile } from './lockfile.js';
import { detectTerraformResource } from './resource.js';

register({
  tech: 'terraform',
  name: 'Terraform',
  type: 'tool',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
  dependencies: [
    { type: 'githubAction', name: 'hashicorp/setup-terraform' },
    { type: 'githubAction', name: 'hashicorp/terraform-cdk-action' },
  ],
  detect: [detectTerraformLockfile, detectTerraformResource],
});
