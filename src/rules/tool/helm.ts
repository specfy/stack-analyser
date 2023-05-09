import { register } from '../../rules.js';

register({
  tech: 'helm',
  files: ['Chart.yaml'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/helm' },
  ],
});
