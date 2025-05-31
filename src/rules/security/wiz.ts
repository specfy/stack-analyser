import { register } from '../../register.js';

register({
  tech: 'wiz',
  name: 'Wiz',
  type: 'security',
  dependencies: [{ type: 'terraform', name: 'registry.terraform.io/AxtonGrams/wiz' }],
});
