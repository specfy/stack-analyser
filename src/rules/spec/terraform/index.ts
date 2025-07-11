import { detectTerraformLockfile } from './lockfile.js';
import { detectTerraformResource } from './resource.js';
import { register } from '../../../register.js';

register({
  tech: 'terraform',
  name: 'Terraform',
  type: 'iac',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
  extensions: ['.tf'],
  dependencies: [
    { type: 'githubAction', name: 'hashicorp/setup-terraform' },
    { type: 'githubAction', name: 'hashicorp/terraform-cdk-action' },
    { type: 'npm', name: 'cdktf' },
    { type: 'golang', name: 'github.com/hashicorp/terraform-plugin-sdk/v2' },
    // {type: 'python', name: 'cdktf'}
  ],
  detect: [detectTerraformLockfile, detectTerraformResource],
});
