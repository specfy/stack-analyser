import { register } from '../../register.js';

register({
  tech: 'gcp.gce',
  name: 'Compute',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@google-cloud/compute' },
    { type: 'terraform.resource', name: 'google_compute_instance' },
    { type: 'ruby', name: 'google-cloud-compute' },
    { type: 'golang', name: 'cloud.google.com/go/compute' },
  ],
});
