import { register } from '../../rules.js';

register({
  tech: 'gcp.gce',
  dependencies: [
    { type: 'npm', name: '@google-cloud/compute' },
    { type: 'terraform.resource', name: 'google_compute_instance' },
    { type: 'ruby', name: 'google-cloud-compute' },
  ],
});
