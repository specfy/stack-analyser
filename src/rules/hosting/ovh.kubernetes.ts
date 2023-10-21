import { register } from '../../register.js';

register({
  tech: 'ovh.kubernetes',
  name: 'OVH Kubernetes',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'ovh_cloud_project_kube' },
  ],
});
