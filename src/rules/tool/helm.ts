import { register } from '../../register.js';

register({
  tech: 'helm',
  name: 'Helm',
  type: 'tool',
  files: ['Chart.yaml'],
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/helm' },
    { type: 'ruby', name: 'helm-rb' },
    { type: 'githubAction', name: 'azure/setup-helm' },
  ],
});
