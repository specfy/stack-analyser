import { register } from '../../../register.js';

import { detectTerraformLockfile } from './lockfile.js';
import { detectTerraformResource } from './resource.js';

register({
  tech: 'terraform',
  name: 'Terraform',
  type: 'tool',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
  dependencies: [],
  detect: [detectTerraformLockfile, detectTerraformResource],
});
