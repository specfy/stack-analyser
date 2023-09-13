import { register } from '../../register.js';

register({
  tech: 'kubernetes',
  name: 'Kubernetes',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/kubernetes' },
    { type: 'rust', name: 'k8s-openapi' },
    { type: 'ruby', name: 'kubeclient' },
    { type: 'npm', name: '@kubernetes/client-node' },
    { type: 'php', name: 'kubernetes/php-client' },
    { type: 'githubAction', name: 'azure/setup-kubectl' },
    { type: 'githubAction', name: 'azure/k8s-set-context' },
    { type: 'githubAction', name: 'azure/k8s-deploy' },
    { type: 'githubAction', name: 'azure/k8s-create-secret' },
  ],
});
