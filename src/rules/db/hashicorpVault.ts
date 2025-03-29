import { register } from '../../register.js';

register({
  tech: 'hashicorp_vault',
  name: 'Vault',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'vault' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/vault' },
    { type: 'rust', name: 'hashicorp_vault' },
    { type: 'ruby', name: 'vault' },
    { type: 'php', name: 'csharpru/vault-php' },
    { type: 'githubAction', name: 'hashicorp/vault-action' },
  ],
});
