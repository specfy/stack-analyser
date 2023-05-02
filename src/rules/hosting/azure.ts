import { register } from '../../rules';

register({
  tech: 'azure',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/azurerm' },
  ],
});
