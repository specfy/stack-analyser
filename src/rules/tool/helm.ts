import { register } from '../../rules';

register({
  tech: 'helm',
  files: ['Chart.yaml'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/helm' },
  ],
});
