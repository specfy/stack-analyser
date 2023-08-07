import { register } from '../../rules.js';

register({
  tech: 'kubernetes',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/kubernetes' },
    { type: 'rust', name: 'k8s-openapi' },
    { type: 'ruby', name: 'kubeclient' },
    { type: 'npm', name: '@kubernetes/client-node' },
  ],
});
