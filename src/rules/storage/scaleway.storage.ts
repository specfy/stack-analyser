import { register } from '../../register.js';

register({
  tech: 'scaleway.storage',
  name: 'Scaleway Storage',
  type: 'storage',
  dependencies: [
    { type: 'terraform.resource', name: 'scaleway_object_bucket' },
    { type: 'terraform.resource', name: 'scaleway_object_bucket_acl' },
  ],
});
