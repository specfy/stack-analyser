import { register } from '../../register.js';

register({
  tech: 'ovh.storage',
  name: 'OVH Storage',
  type: 'storage',
  dependencies: [
    {
      type: 'terraform.resource',
      name: 'ovh_cloud_project_region_storage_presign',
    },
  ],
});
