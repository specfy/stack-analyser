import { register } from '../../register.js';

register({
  tech: 'gcp.gke',
  name: 'Google Kubernetes',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'google_container_cluster' },
  ],
});
