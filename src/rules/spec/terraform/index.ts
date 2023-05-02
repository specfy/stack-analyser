import { register } from '../../../rules';

import { detectTerraformComponent } from './component';

register({
  tech: 'terraform',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
  dependencies: [],
  detect: detectTerraformComponent,
});
