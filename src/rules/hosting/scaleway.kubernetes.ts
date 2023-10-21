import { register } from '../../register.js';

register({
  tech: 'scaleway.kubernetes',
  name: 'Scaleway Kubernetes',
  type: 'hosting',
  dependencies: [{ type: 'terraform.resource', name: 'scaleway_k8s_cluster' }],
});
