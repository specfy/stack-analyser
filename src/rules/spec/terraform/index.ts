import { register } from '../../../rules.js';

import { detectTerraformComponent } from './component.js';

register({
  tech: 'terraform',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
  dependencies: [],
  detect: detectTerraformComponent,
});
