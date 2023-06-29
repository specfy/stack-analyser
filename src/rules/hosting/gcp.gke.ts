import { register } from '../../rules.js';

register({
  tech: 'gcp.gke',
  dependencies: [
    { type: 'terraform.resource', name: 'google_container_cluster' },
  ],
});
