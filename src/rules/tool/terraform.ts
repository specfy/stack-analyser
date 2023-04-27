import { register } from '../../rules';

register({
  tech: 'terraform',
  files: ['.terraform', '.terraform.lock.hcl', 'main.tf', 'variables.tf'],
});
