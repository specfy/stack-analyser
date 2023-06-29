import { register } from '../../../rules.js';

import { detectTerraformLockfile } from './lockfile.js';
import { detectTerraformResource } from './resource.js';

register({
  tech: 'terraform',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
  dependencies: [],
  detect: [detectTerraformLockfile, detectTerraformResource],
});
